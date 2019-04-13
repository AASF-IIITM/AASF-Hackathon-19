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
if(!isset($_SESSION['user_id']))
  {echo "<script>window.alert('Login first!');</script>";
    echo "<script>window.location.href='HomePage.php';</script>";} 
?>



<!DOCTYPE html>
<html>
<head>
	<title> PETITIONS </title>
	<link rel="stylesheet" type="text/css" href="KnowYourLeaders.css">
	<link rel="stylesheet" type="text/css" href="NavigationBar.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
	<!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->
	<style>
		li{
			display: inline;
		}

		select{
			display: inline;
		}
		body{
			background-color: #E8E8E8;
		}
		.col-1 {width: 30%; float: left; height: 40vw; background-color: white;}

		.col-2 {width: 65%; margin-top:5vw; float: right;height: 600px;overflow-y: scroll;
			/*background-image: linear-gradient(to bottom right, white, blue);*/ /*border-radius: 2vw;*/
			background-color: white;color:black; box-shadow: 0 2vw 2vw 0 black, 0 2vw 2vw 0 black;}
		.Leaders{
			margin-left: 50vw;
			margin-top: 10vw;
		}
		.dropdown{
			/*margin-top: 1vw;*/
			/*position: absolute;*/
			/*float:left; */
			padding: 3vw;
			/*border-right: 1vw solid black;*/
			margin-top: 12vw;
			height: 100%;
			width: 17%;
			background-color: white;
			color: black;
			/*border-radius: 2vw;*/
			float: left;
			box-shadow: 0 1vw 1vw 0 black, 0 1vw 1vw 0 black,0 1vw 1vw 0 black,0 1vw 1vw 0 black;
		}
		.dropdown h2{
			font-size: 1.7vw;
			text-align: center;
		}
		.dropdown select{
			height: 2vw;
			width: 10vw;
		}
		.dropdown button{
			height: 2vw;
			width: 3vw;
		}
		.card {
			
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: #E8E8E8;
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
		@media screen and (max-width: 600px){
			.dropdown{
				width: 95%;
				border-right: none;
				border-bottom: 1vw solid black;
				height: 50vw;
			}
			.dropdown h2{
				text-align: center;
				font-size: 4vw;
			}
			.dropdown select{
				font-size: 3vw;
			height: 6vw;
			width: 20vw;
		}
		.dropdown button{
			font-size: 5vw;
			height: 7vw;
			width: 12vw;
		}
		.col-2{
			width: 100%;
		}
		}
		.meter { 
	height: 1vw;  /* Can be anything */
	position: relative;
	background: #555;
	-moz-border-radius: 1vw;
	-webkit-border-radius: 1vw;
	border-radius: 1vw;
	padding: 0.5vw;
	margin-left: 1vw;
	margin-right: 1vw;
	/*box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);*/
}
.meter > span {
  display: block;
  font-size: 0.8vw;
  color: white;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43,194,83);
  background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
  );
  box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}

	</style>



</head>

<body>
	<div><?php include 'NavigationBar.php'; ?> </div>

<div class="dropdown col-1">
	<form action="" method="GET">
<!-- Select Country: <select name="state" id="countySel" size="1">
<option value="" selected="selected">Select Country</option>
</select>
 --><br>
 <center>
<br><div class="font">
Select State: <br><select name="State" id="stateSel" size="1">
<option value="" selected="selected">Select State</option>
</select>
<br>
<br>
Select Constituency: <br><select name="Constituency" id="districtSel" size="1">
<option value="" selected="selected">Please select State first</option>
</select><br>
<br>
<input type="submit" name="submit" value="GO" class="btn">
</center>
</form><closeform></closeform>
</div>
</form></div>



<div class="col-2">
	<center><h1 class="fontcontent"> LATEST PETITIONS </h1></center>
	<hr>
	
	<!-- <center><h2>NAME</h2>
	<p> State </p>
	<p> Constituency </p>
	<p>Attendance </p></center>
	<hr> -->
	<center>
	<div class="font">
		 <?php 
		 if(!isset($_GET['submit'])){
            $p="SELECT * FROM petitions WHERE approve=1 ORDER BY upload_date DESC";
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
<i style="font-size:1.5vw;margin-right: 2vw;" class="fa fonttext">&#xf087;&nbsp;'.$row['votes'].'</i>&nbsp;
</div><hr>';}
}

else{
	$state=$_GET['State'];
		$const=$_GET['Constituency'];
		$sql=mysqli_query($conn,"SELECT * FROM petitions WHERE `state`='".$state."' AND `consitutency`='".$const."'") or die("Error: " . mysqli_error($conn));
				while($row=mysqli_fetch_array($sql)){
  				$post_id=$row['post_id'];
				echo '<div class="post fontcontent" onclick=location.href="PetitionContent.php?post_id='.$post_id.'";>';
				?><?php
  				$r="SELECT * FROM petitions";
  				$result=mysqli_query($conn,$r);  
  				$date=$row['upload_date'];
  				$que=$row['title'];
echo '<p style="font-size: 1vw;">Time:'.$date.'</p> <br>
<p style="margin-bottom: 3vw;font-size: 1.5vw;"><strong>'.$que.'</strong></p>
<i style="font-size:1.5vw;margin-right: 1vw;" class="fa fonttext">&#xf087;&nbsp;'.$row['votes'].'</i>&nbsp;
</div><hr>';
}}
?>
</div>
	

	</div>

</div>
</body>
</html>
<script>
var stateObject = {
"AP": ["Narsapur", "Guntur"],
"MP": ["Gwalior", "Guna"]
}

window.onload = function () {
var stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");

for (var state in stateObject) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
stateSel.onchange = function () { // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done 
var district = stateObject[this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}
</script>