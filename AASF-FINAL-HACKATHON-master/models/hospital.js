var mongoose=require("mongoose");
var hospitalSchema = new mongoose.Schema({
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

var Hospital=mongoose.model("Hospital", hospitalSchema);
module.exports=Hospital;