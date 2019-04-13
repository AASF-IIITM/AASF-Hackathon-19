<?php
session_start();
$id=$_SESSION['user_id'];


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
	<title> Know Your Leaders </title>
	<link rel="stylesheet" type="text/css" href="KnowYourLeaders.css">
	<link rel="stylesheet" type="text/css" href="NavigationBar.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
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
			box-shadow: 0 2vw 2vw 0 black, 0 2vw 2vw 0 black,0 2vw 2vw 0 black,0 2vw 2vw 0 black;
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
  width: 30%;
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

	</style>



</head>

<body>
		<div><?php include 'NavigationBar.php'; ?> </div>

<div class="dropdown col-1 font">
	<form action="" method="GET">
<!-- Select Country: <select name="state" id="countySel" size="1">
<option value="" selected="selected">Select Country</option>
</select>
 --><br>
<br>
<center>
Select State: <select name="State" id="stateSel" size="1">
<option value="" selected="selected">Select State</option>
</select>
<br>
<br>
Select Constituency: <select name="Constituency" id="districtSel" size="1">
<option value="" selected="selected">Please select State first</option>
</select><br>
<br>
<input type="submit" name="submit" value="GO" class="btn">
</center>
</form><closeform></closeform>
</div>

<div class="col-2 fontcontent">
	<center><h1 class="font"> MOST ACTIVE LEADERS </h1></center>
	<hr>
	
	<!-- <center><h2>NAME</h2>
	<p> State </p>
	<p> Constituency </p>
	<p>Attendance </p></center>
	<hr> -->
	<?php
	if(!isset($_GET['submit']))
	{       
		$sql=mysqli_query($conn,"SELECT * FROM state_const ORDER BY Attendence DESC LIMIT 5") or die("Error: " . mysqli_error($conn));
		while($row=mysqli_fetch_array($sql)){
			
			$state=$row['state'];
			$const=$row['const'];
			$name=$row['member_name'];
			$Attendence=$row['Attendence'];
			echo '<center><div class="card">';
			echo '<img src="data:image/jpeg;base64,'.base64_encode($row['photo']).'"height="170" width="250"/> <div class="container"><p><strong>Name: </strong>';
			
			
			echo $name.'<br></p><p><strong>State: </strong>';
			echo $state.'<br></p><p><strong>Constituency: </strong>';
			echo $const.'<br></p><p><strong>Attendance: </strong>';
			echo $Attendence.'</p><br></div></div></center> <hr>	';

		}
	}
	else{
		$state=$_GET['State'];
		$const=$_GET['Constituency'];
		$sql=mysqli_query($conn,"SELECT * FROM state_const WHERE `state`='".$state."' AND `const`='".$const."'") or die("Error: " . mysqli_error($conn));
		while($row=mysqli_fetch_array($sql)){
			
			$state=$row['state'];
			$const=$row['const'];
			$name=$row['member_name'];
			$Attendence=$row['Attendence'];
			echo '<center><div class="card">';
			echo '<img src="data:image/jpeg;base64,'.base64_encode($row['photo']).'"height="170" width="250"/> <div class="container"><p><strong>Name: </strong>';
			
			
			echo $name.'<br></p><p><strong>State: </strong>';
			echo $state.'<br></p><p><strong>Constituency: </strong>';
			echo $const.'<br></p><p><strong>Attendance: </strong>';
			echo $Attendence.'</p><br></div></div></center> <hr>	';

		}
	}
?>

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