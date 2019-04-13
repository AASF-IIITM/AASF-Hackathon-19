var mongoose=require("mongoose");
var medicalSchema = new mongoose.Schema({
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

var Medical=mongoose.model("Medical", medicalSchema);
module.exports=Medical;