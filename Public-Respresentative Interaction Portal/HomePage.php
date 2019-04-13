<?php
session_start();

$host="localhost";
$user="root";
$password="";
$db="x4y2";

// Create connection
$conn = mysqli_connect($host, $user, $password, $db);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>

<!DOCTYPE html>
<html>
<head>
	<title> HOME </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script>
  <script src="jquery.localscroll.js" type="text/javascript"></script> 
  <script src="jquery.scrollTo.js" type="text/javascript"></script> 
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">


	<style>
		{box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin-top: 4vw;

}

/* Hide the images by default */
.mySlides {
  display: none;
  margin-left: 0;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
    li{
      display: inline;
    }
    /* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey; 
  border-radius: 10px;
}
.col-1 {width: 45%; float: left; height: 40vw; /*background-image: linear-gradient(to bottom right, #12cac2, white);*/overflow-y: scroll; margin-left: 2vw;margin-top: 30vw;margin-bottom: 2vw; /*border-radius: 2vw;*/
 box-shadow: 0 1vw 1vw 0 black, 0 1vw 1vw 0 black;padding: 0.5vw;
background-color: white;}

.col-2 {width: 45%; float: right;height: 40vw; /*background-image: linear-gradient(to bottom right, #12cac2, white);*/overflow-y: scroll; margin-right: 2vw;margin-top: 30vw;margin-bottom: 2vw;/*border-radius: 2vw;*/
 box-shadow: 0 1vw 1vw 0 black, 0 1vw 1vw 0 black;padding: 0.5vw;background-color: white;}

.col-3{
  width: 100%;float: none;height: auto;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   background-color: #F5F5F5;
  padding-top: 2vw;
  border-top: 1vw solid black;
  border-radius: 2vw;
}
body{
  background-color: #E8E8E8;
}
.col-1 h2{
  background-color: #008ECC;
  color: white;
}
.col-2 h2{
  background-color: #008ECC;
  color: white;
}

.font{
  font-family: 'Ubuntu', sans-serif;

}
.fontcontent{
  font-family: 'Rubik', sans-serif;

}

@media screen and (max-width: 600px) {
  /*.slideshow-container{
    margin-top:1vw;
  }*/
  .col-1{
    float: none;
    margin-left:0;
    margin-right:0;

    width: 100%;


  }
  .col-2{
    float: none;
    margin-left: 0;
    margin-right:0;
    margin-top:0;
    width: 100%;
  }
}
.parallax-window {
    min-height: 400px;
    background: transparent;
}
.post{
    /*background-color: grey;*/
    padding:1vw 1vw 1vw 1vw;
    width: 90%;
    margin-left: 2vw;
    margin-bottom: 1vw;
    margin-top: 3vw;
}
}



	</style>
</head>

<body>
	<div><?php include 'NavigationBar.php'; ?> </div>
	 <div class="slideshow-container">
  <div class="mySlides fade" >
    <img src="Images/Flag.jpg" style="width: 100%; height:25vw;">
  </div>

  <div class="mySlides fade">
    <img src="Images/Parliament.jpg" style="width: 100%; height:25vw;" >
  </div>

  <div class="mySlides fade">
    <img src="Images/Emblem.jpg" style="width: 100%; height:25vw;">
  </div>
</div>

<div class="content">
	<div class="col-1">
  		

    <center><h2 class="font">Trending Discussions in the Parliament</h2></center>
    <?php 
            $p="SELECT * FROM parliament ORDER BY votes DESC LIMIT 5 ";
$res=mysqli_query($conn,$p);
while($row=mysqli_fetch_array($res)){
  $post_id=$row['post_id'];
echo '<div class="post fontcontent" onclick=location.href="ProposalContent.php?post_id='.$post_id.'";>';
  $r="SELECT * FROM parliament";
  $result=mysqli_query($conn,$r);  
  $date=$row['upload_date'];
  $que=$row['title'];
echo '<p style="font-size: 1vw;">Time:'.$date.'</p> <br>
<p style="margin-bottom: 2vw;font-size: 1.5vw;"><strong>'.$que.'</strong></p>
<i style="font-size:1.5vw;margin-right: 1vw;" class="fa fonttext">&#xf087;&nbsp;'.$row['votes'].'</i>&nbsp;
</div><hr>';

}?>
    
 	 </div>
	</div>

	<div class="col-2">
  	
    
   <center> <h2 class="font">Trending Petitions</h2></center>
    <?php 
            $p="SELECT * FROM petitions WHERE approve=1 ORDER BY votes DESC LIMIT 5 ";
$res=mysqli_query($conn,$p);
while($row=mysqli_fetch_array($res)){
  $post_id=$row['post_id'];
echo '<div class="post fontcontent" onclick=location.href="PetitionContent.php?post_id='.$post_id.'";>';
  $r="SELECT * FROM petitions";
  $result=mysqli_query($conn,$r);  
  $date=$row['upload_date'];
  $que=$row['title'];
echo '<p style="font-size: 1vw;">Time:'.$date.'</p> <br>
<p style="margin-bottom: 3vw;font-size: 1.5vw;"><strong>'.$que.'</strong></p>
<i style="font-size:1.5vw;margin-right: 1vw;" class="fa fonttext">&#xf087;&nbsp;'.$row['votes'].'</i>&nbsp;
</div><hr>';
}?>
</div>


<div class="col-3">
  	
    
  <div style="width:50%;float: left; left: 0;top: 0;right:0;bottom:0;background-color: white;border-top: 0.5vw solid black;">
      <h2 style="margin-left: 10vw;" class="font">  Contact Us</h2>
      <div class="fontcontent">
      <p style="margin-left: 10vw;"> abc@gmail.com </p>
      <p style="margin-left: 10vw;"> 9886798867 </p>
      <p style="margin-left: 10vw;"> 9816298165 </p>
    </div>
  </div>
  <div style="width:50%;float: right; background-color: white; left: 0;top: 0;right:0;bottom:0;border-top: 0.5vw solid black;">
      <h2 style="margin-left: 10vw;class="font"> Address</h2>
      <div class="fontcontent">
      <p style="margin-left: 10vw;"> Block number 7 </p>
      <p style="margin-left: 10vw;"> Road Number 22 </p>
      <p style="margin-left: 10vw;"> Hyderabad</p>
  </div></div>
</div>


</body></html>


<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
</script>