var express= require("express");
var router=express.Router({mergeParams: true});
var passport=require("passport");
var Accomodation=require("../models/accomodation");
var middleware=require("../middleware");

router.use(passport.initialize());
router.use(passport.session());
router.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});
//====================
//ACCOMODATION ROUTES START
//=====================

router.get("/",function(req,res){
	console.log(req.user);
	Accomodation.find({},function(err, allaccomodations){
		if(err){
			console.log(err);
		}else{
			res.render("accomodations",{accomodations:allaccomodations, currentUser:req.user});
		}
	});
});


router.get("/new", middleware.isLoggedIn, function(req,res){
	res.render("new_accomodation");
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
	var newAccomodation={name:name, image:image, author:author, address:address, city:city, contact:contact, email:email};
	console.log(newAccomodation.author);
	Accomodation.create(newAccomodation, function(err, newlyCreated){
			if(err){
				console.log(err);
			}else{
				console.log("add ho gya");
				res.redirect("/accomodations"); 
			}
	});
});

router.get("/:id",function(req,res){
	Accomodation.findById(req.params.id, function(err, foundAccomodation){
		if(err){
			console.log(err);
		}else{
			res.render("individual_accomodation",{accomodation: foundAccomodation});
		}
	});
});

//edit

//update

router.get("/edit/:id", isLoggedIn ,function(req,res){
	Accomodation.findById(req.params.id, function(err,foundAccomodation){
		if(err){
			res.redirect("/accomodations");
		}else{
			res.render("edit_accomodation", {accomodation:foundAccomodation});
		}
	});
});
//update accomodation
router.put("/:id",  function(req,res){
	Accomodation.findByIdAndUpdate(req.params.id, req.body.accomodation, function(err, updatedAccomodation){
		if(err){
			res.redirect("/accomodations");
		}else{
			res.redirect("/accomodations/"+req.params.id);
		}
	});
});
router.get("/edit/book/:id", isLoggedIn, function(req,res){
	Accomodation.findById(req.params.id, function(err,foundAccomodation){
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
			        to:'prajwal714singh@gmail.com', 
			        subject: "Appointment request", 
			        text: "Hello, A patient tried booking an hotel. His details are as follows: ",  
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
//delete accomoddation
router.delete("/:id", function(req,res){
	Accomodation.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/");
		}else{
			res.redirect("/accomodations");
		}
	});
});
//=====================
//ACCOMODATION ROUTES END
//=====================


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
module.exports=router;