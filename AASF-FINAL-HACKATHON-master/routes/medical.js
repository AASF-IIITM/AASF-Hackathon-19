var express= require("express");
var router=express.Router({mergeParams: true});
var passport=require("passport");
var Medical=require("../models/medical");
var middleware=require("../middleware");

router.use(passport.initialize());
router.use(passport.session());
router.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});
//====================
//medicals ROUTES START
//=====================

router.get("/",function(req,res){
	console.log(req.user);
	Medical.find({},function(err, allmedicals){
		if(err){
			console.log(err);
		}else{
			res.render("medicals",{medicals:allmedicals, currentUser:req.user});
		}
	});
});


router.get("/new", middleware.isLoggedIn, function(req,res){
	res.render("new_medical");                                       
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
	var newMedical={name:name, image:image, author:author, address:address, city:city, contact:contact, email:email};
	console.log(newMedical.author);
	Medical.create(newMedical, function(err, newlyCreated){
			if(err){
				console.log(err);
			}else{
				console.log("add ho gya");
				res.redirect("/medicals");                                  
			}
	});
});

router.get("/:id",function(req,res){
	Medical.findById(req.params.id, function(err, foundMedical){
		if(err){
			console.log(err);
		}else{
			res.render("individual_medical",{medical:foundMedical});         
		}
	});
});

//edit

//update

router.get("/edit/:id", function(req,res){
	Medical.findById(req.params.id, function(err,foundMedical){
		if(err){
			res.redirect("/medicals");
		}else{
			res.render("edit_medical", {medical:foundMedical});                 
		}
	});
});
//update medicals
router.put("/:id",  function(req,res){
	Medical.findByIdAndUpdate(req.params.id, req.body.medical, function(err, updatedMedical){
		if(err){
			res.redirect("/medicals");
		}else{
			res.redirect("/medicals/"+req.params.id);
		}
	});
});
//delete medicals
router.delete("/:id", function(req,res){
	Medical.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/");
		}else{
			res.redirect("/medicals");
		}
	});
});
//=====================
//medicals ROUTES END
//=====================



module.exports=router;