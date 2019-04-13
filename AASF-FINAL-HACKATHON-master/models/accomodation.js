var mongoose=require("mongoose");
var accomodationSchema = new mongoose.Schema({
	name:String,
	image:String,
	address:String,
	city:String,
	contact:Number,
	email:String,
	author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String
	}
});

var Accomodation=mongoose.model("Accomodation", accomodationSchema);
module.exports=Accomodation;