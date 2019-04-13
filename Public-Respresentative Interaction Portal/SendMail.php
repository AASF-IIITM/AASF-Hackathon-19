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
	$sql=mysqli_query($conn,"SELECT * FROM petitions where approve=1 AND votes>=10 AND send=0");
	while($row=mysqli_fetch_array($sql)){
		$title= $row['title'];
		$content= $row['content'];
		$post=$row['post_id'];
$q=mysqli_query($conn,"UPDATE petitions SET send=1 where post_id=$post");
$h=mysqli_query($conn,"UPDATE petitions SET Status=1 where post_id=$post");

				echo '<script>window.location.href="send.php?title='.$title.' & content='.$content.'"</script>'; 

		}?>
			
		


</body></html>
