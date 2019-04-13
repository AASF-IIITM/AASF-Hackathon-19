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

	if(isset($_GET['id'])){
		$post_id=$_GET['id'];
	 		$q="UPDATE petitions SET approve=1 where post_id=$post_id";
				$res=mysqli_query($conn,$q);
						echo "<script>window.location.href='SelectPetitions.php';</script>"; 

				
	 	}