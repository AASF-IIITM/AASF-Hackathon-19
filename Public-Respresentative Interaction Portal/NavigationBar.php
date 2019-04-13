<?php

?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  width: 100%;
  top: -0.5vw;
  z-index: 3;

}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.content {
}




.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: fixed;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }


}
.font{
  font-family: 'Ubuntu', sans-serif;

}
.fontcontent{
  font-family: 'Rubik', sans-serif;

}

@media screen and (max-width: 600px) {
  .fontcontent{
    font-size:3vw;
  }
  .font{
    font-size:4vw;
  }
  }

/* Login Button */
.openButtonLogin {
    background-image: url("yellowBackground2.jpg");
    background-size: cover;
    display: block;
    color: black;
    border: 0.1vw solid black;
    transition: all .3s;
    -webkit-transition: all .3s;
    display: block;
    cursor: pointer;
    opacity: 0.75;
    border-radius: 1vw;
  box-shadow: 0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5);
    text-align: center;
    white-space: pre-wrap;

}

/* Register Button */
.openButtonRegister {
    background-image: url("yellowBackground2.jpg");
    background-size: cover;
    display: block;
    color: black;
    border: 0.1vw solid black;
    transition: all .3s;
    -webkit-transition: all .3s;
    display: block;
    
    cursor: pointer;
    opacity: 0.75;
    
    
    border-radius: 1vw;
  box-shadow: 0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5);
    text-align: center;
    
    white-space: pre-wrap;
}

/* The popup form - hidden by default */
.form-popup {
    display: none;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border: 0.5vw solid #f1f1f1;
    z-index: 9;
}

/* Add styles to the form container */
.form-container {
    max-width: 25vw;
    padding: 1vw;
    background-color: black;
    border-radius: 1vw;
    margin-left: auto;
    margin-right: auto;
    color: white;
 opacity: 0.9;
}

.form-container:hover{
    opacity: 1;
}

/* Full-width input fields */
.form-container input[type=text], .form-container input[type=password], .form-container input[type=email] {
    width: 89%;
    padding: 1vw;
    margin: 0.9vw 0 2.2vw 0;
    border: none;
    background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

/* Login/Register Button */
.btn {
    background-color: #4CAF50;
    color: white;
    padding: 1vw 2vw;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:1vw;
    opacity: 0.75;
    border-radius: 1vw;
}

/* Close Button */
.cancel {
    background-color: red;
}

/* Hover */
.form-container .btn:hover, .openButtonLogin:hover, .openButtonRegister:hover {
    opacity: 1;
}

.fontnav{
  font-family: 'Baloo Thambi', cursive;

}

</style>
</head>
<body>
<script src="forms.js"></script>
<div class="topnav sticky fontnav" id="myTopnav">
  <a href="HomePage.php#home" class="active">Home</a>
  <a href="Proposals.php">Proposals</a>
  <a href="Petitions.php">Petitions</a>
  <a href="KnowYourLeaders.php">Know Your Leaders</a>
    <a href="NewTopic.php">Submit A Petition</a>

    <!-- <a href="NewTopic.php">About</a> -->
	

   <?php
            
            if(!isset($_SESSION['user_id'])){
            ?>	

   			<a><button class="openButtonRegister font"  onclick="openForm(2)">Sign&nbsp;Up</button></a>
   			<a><button class="openButtonLogin font"  onclick="openForm(1)"  >Sign&nbsp;In</button></a>
   		<?php }

   		else{
   		?>
   			<a href="logout.php" class="openButtonRegister font" >Logout</a></li>
    		
    <?php } ?>

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div class="form-popup font" id="myForm">
  	<form action="Login.php" class="form-container" method="post">
    	<center><h1>Sign&nbsp;In</h1></center>
		<label for="email"><b>Email<br></b></label>
		<input type="email" placeholder="Enter Email" name="email" value="" required><br>
    	<label for="psw"><b>Password<br></b></label>
    	<input type="password" placeholder="Enter Password" name="psw" required><br>
    	<button type="submit" class="btn font1" name="submit">Login</button><br>
    	<button type="button" class="btn cancel font1" onclick="closeForm()">Close</button>

	</form>
</div>

 <!--RegistrationBox-->
<div class="form-popup font" id="myForm1">
	<form action="Register.php" class="form-container" method="post">
    	<center><h1>Sign&nbsp;Up</h1></center>
		<label for="name"><b>Name<br></b></label>
		<input type="text" placeholder="Enter Name" name="name" required><br>
		<label for="email"><b>Email<br></b></label>
		<input type="email" pattern=".+@(gmail|yahoo|yandex)\.co(m|\.in|\.uk)" placeholder="Enter Email" name="email" required><br>
		<label for="psw"><b>Password<br></b></label>
		<input type="password" placeholder="Enter Password" name="psw" required>
		<label for="psw1"><b>Confirm Password<br></b></label>
		<input type="password" placeholder="Enter Password" name="psw1" minlength="6" maxlength="30" required>
    	<button type="submit" class="btn font1" name="submit">Register</button>
    	<button type="button" class="btn cancel font1" onclick="closeForm()">Close</button>
  	</form>
</div>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





</script>

</body>
</html>
