<?php
	session_start();

$host="localhost";
$user="root";
$password="";
$db="x4y2";

$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
	if (!isset($_GET['q'])
		die("Error");
	$state = $_GET['q'];
	ob_start();
	$result = mysqli_query($conn, "select distinct const from state_const where state =".$state);
	while($row = mysql_fetch_assoc($result)){
		echo "<option value=".$row['const'].">".$row['const']."</option>"
	}
	$content = ob_get_clean();
	echo $result;
?>