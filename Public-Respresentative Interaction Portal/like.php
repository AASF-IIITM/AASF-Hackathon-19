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
$id=$_GET['post_id'];
$uid=$_SESSION['user_id'];
$q="SELECT * FROM votes_parliament WHERE user_id=$uid AND post_id=$id";
$result=mysqli_query($conn,$q);
if(mysqli_num_rows($result)==0){
$sql="UPDATE parliament SET votes=votes+1 WHERE post_id=$id";
$sqli="INSERT INTO votes_parliament VALUES($id,$uid)";
mysqli_query($conn,$sql);
mysqli_query($conn,$sqli);
}
$num = mysqli_fetch_array( mysqli_query($conn, "SELECT votes FROM parliament WHERE post_id = $id"), MYSQLI_ASSOC);
echo json_encode(intval($num['votes']));
?>