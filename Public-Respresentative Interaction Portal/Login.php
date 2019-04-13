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

if(isset($_REQUEST["submit"])){
	
	$email=$_REQUEST['email'];
	
	$psw=$_REQUEST['psw'];
	$psw=md5($psw);
	/*$query=mysqli_query($conn,"select user_id from Users where email='$email' AND password='$psw'");
	print_r($query);
	$rowcount=mysqli_num_rows($query);*/
	$stmt = $conn->prepare("Select * from citizen where email=? and Password=?");
	$stmt->bind_param('ss',$email,$psw);
	$stmt->execute();
	$result=$stmt->get_result();
	while($row = $result->fetch_assoc())
  		$ids = $row['user_id'];
	$_SESSION['user_id']=$ids;
	$stmt->close();
	
	if(isset($_SESSION['user_id']))
		echo "<script>window.location.href='HomePage.php';</script>"; 


	/*if($rowcount==true)
	{
		$name=mysqli_query($conn,"select user_id from Users");
		$_SESSION['user_id']=$name;

	}*/
	else
	{
		echo "<script>window.alert('Register first!');</script>";
		echo "<script>window.location.href='HomePage.php';</script>"; 

	}
}


/*if(isset($_SESSION['user_id']))
		echo "<script>window.location.href='HomePage.php';</script>"; */



	?>