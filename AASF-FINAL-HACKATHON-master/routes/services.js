var express= require("express");
var router=express.Router({mergeParams: true});
var passport=require("passport");
var User=require("../models/user");
router.use(passport.initialize());
router.use(passport.session());
router.get("/",function(req,res){
	res.render("services");
});

router.get("/facilities",function(req,res){
	res.render("facilities");
});

router.get("/total_health_checkup",function(req,res){
	res.render("total_health_checkup");
});

router.get("/total_pregnancy_care",function(req,res){
	res.render("total_pregnancy_care");
});

router.get("/new_born_care",function(req,res){
	res.render("new_born_care");
});

router.get("/pharmacy_facilities",function(req,res){
	res.render("pharmacy_facilities");
});

module.exports=router;