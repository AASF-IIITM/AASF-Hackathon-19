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
$pid=$_GET['post_id'];
$uid=$_SESSION['user_id'];
$Comment=$_GET['Comment'];
$sql="INSERT INTO comments_petitions VALUES($pid,$uid,now(),?)";
$time="15523";
$stmt = $conn->prepare($sql);
	$stmt->bind_param('s',$Comment);
	$stmt->execute();
	
	$stmt->close();

			echo '<script>window.location.href="PetitionContent.php?post_id='.$pid.'";</script>'; 

?>