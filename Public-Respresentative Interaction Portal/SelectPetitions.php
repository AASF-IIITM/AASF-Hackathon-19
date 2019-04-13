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

	
/**/

?>

<!DOCTYPE html>
<html>
<head>
	<title>Select Petitions</title>
</head>
<body>
	
	<?php 
	$sql=mysqli_query($conn,"SELECT * FROM petitions where approve=0");
	while($row=mysqli_fetch_array($sql)){
		echo $row['title']'<br>';
		echo $row['content'];
		$post_id=$row['post_id'];
		echo '<a href="submitbyadmin.php?id='.$post_id.'">Yes</a>';}
		?>
			
		


</body></html>
