var Hospital=require("../models/hospital");
var middlewareObj={};

middlewareObj.checkHospitalOwnership=function(req, res, next){
	if(req.isAuthenticated()){
		Hospital.findById(req.params.id, function(err, foundHospital){
			if(err){
				res.redirect("back");
			} else{
				if(foundHospital.author.id.equals(req.user._id)){
					next();
				}else{
					res.redirect("back");
				}
			}
		});
	} else{
		res.redirect("back");
	}

}

middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports=middlewareObj;