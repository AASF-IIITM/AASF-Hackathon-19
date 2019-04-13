var express=require("express");
var mongoose=require("mongoose");
var passport=require("passport");
var path=require("path");
var bodyParser=require("body-parser");
var LocalStrategy=require("passport-local");
var User=require("./models/user");
var methodOverride=require("method-override");
var Hospital=require("./models/hospital");
var Contactus=require("./models/contactus");
var Medical=require("./models/medical");
var Accomodation=require("./models/accomodation");

var hospitalRoutes= require("./routes/hospital");
var medicalRoutes=require("./routes/medical");
var indexRoutes=require("./routes/index");
var servicesRoutes=require("./routes/services");
var accomodationRoutes=require("./routes/accomodation");
mongoose.connect("mongodb://localhost/Rapidowell1", { useNewUrlParser: true });

mongoose.set('useFindAndModify', false);

var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));


//================
//passport
//================
app.use(require("express-session")({
	secret:"India lifts the worldcup after 28 years!",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.use(indexRoutes);
app.use("/hospitals", hospitalRoutes);
app.use("/accomodations", accomodationRoutes);
app.use("/services", servicesRoutes);
app.use("/medicals", medicalRoutes);

app.listen(8000, '127.0.0.1', function(){
	console.log("server started......!!!!");
});

