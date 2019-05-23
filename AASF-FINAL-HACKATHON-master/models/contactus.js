var mongoose=require("mongoose");
var contactusSchema = new mongoose.Schema({
	name:String,
	contact:Number,
	comment:String,
});

var Contactus=mongoose.model("Contactus", contactusSchema);
module.exports=Contactus;