var express= require("express");
var router=express.Router({mergeParams: true});
var passport=require("passport");
var Hospital=require("../models/hospital");
var middleware=require("../middleware");

router.use(passport.initialize());
router.use(passport.session());
router.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});
//====================
//HOSPITAL ROUTES START
//=====================

router.get("/",function(req,res){
	console.log(req.user);
	Hospital.find({},function(err, allhospitals){
		if(err){
			console.log(err);
		}else{
			res.render("hospitals",{hospitals:allhospitals, currentUser:req.user});
		}
	});
});


router.get("/new", middleware.isLoggedIn, IsAdmin, function(req,res){
	res.render("new_hospital");
});

router.post("/", function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var author={
		id:req.user._id,
		username:req.user.username
	};
	var address=req.body.address;
	var city=req.body.city;
	var contact=req.body.contact;
	var email=req.body.email;
	var newHospital={name:name, image:image, author:author, address:address, city:city, contact:contact, email:email};
	console.log(newHospital.author);
	Hospital.create(newHospital, function(err, newlyCreated){
			if(err){
				console.log(err);
			}else{
				console.log("add ho gya");
				res.redirect("/hospitals"); 
			}
	});
});

router.get("/:id",function(req,res){
	Hospital.findById(req.params.id, function(err, foundHospital){
		if(err){
			console.log(err);
		}else{
			res.render("individual_hospital",{hospital: foundHospital});
		}
	});
});


router.get("/edit/:id", isLoggedIn, IsAdmin, function(req,res){
	Hospital.findById(req.params.id, function(err,foundHospital){
		if(err){
			res.redirect("/hospitals");
		}else{
			res.render("edit_hospitals", {hospital:foundHospital});
		}
	});
});
router.get("/edit/book/:id", isLoggedIn, function(req,res){
	Hospital.findById(req.params.id, function(err,foundHospital){
		if(err){
			res.redirect("/hospitals");
		}else{
			var msg='';
			var nodemailer = require('nodemailer');

			var transport = nodemailer.createTransport({
			service:'gmail',
			 auth: {
			             user: "chaturvediabhay24@gmail.com",
			             pass: ""
			        }
			    });
			var mailOptions = {
			        from: "chaturvediabhay24@gmail.com", 
			        to:'<%= foundHospital.email %>', 
			        subject: "Appointment request", 
			        text: "Hello, A patient tried booking an Appointment. His details are as follows: ",  
			    }
			transport.sendMail(mailOptions, function(error, response){
			    if(error){
			         msg=res.send("Email could not sent due to error: "+error);
			         console.log('Error');
			    }else{
			         msg= res.send("Email has been sent successfully");
			         console.log('mail sent');
			    } 
			}); 

			res.send("Mail Send");
		}
	});
});
//update hospital
router.put("/:id",  function(req,res){
	Hospital.findByIdAndUpdate(req.params.id, req.body.hospital, function(err, updatedHospital){
		if(err){
			res.redirect("/hospitals");
		}else{
			res.redirect("/hospitals/"+req.params.id);
		}
	});
});
//delete hospital
router.delete("/:id", isLoggedIn, IsAdmin, function(req,res){
	Hospital.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/");
		}else{
			res.redirect("/hospitals");
		}
	});
});
//=====================
//HOSPITAL ROUTES END
//=====================


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
function IsAdmin(req, res, next){
	if(req.user.isAdmin){
		return next();
	}
	res.redirect("/myprofile");
}
module.exports=router;