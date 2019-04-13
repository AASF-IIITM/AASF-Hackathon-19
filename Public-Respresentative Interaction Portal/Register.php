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

$name=$_POST['name'];
$email=$_POST['email'];
$psw=$_POST['psw'];
$psw1=$_POST['psw1'];
	$psw=md5($psw);
	$psw1=md5($psw1);

if($psw!=$psw1)
	{
	echo "<script>window.alert('check passwords');</script>";
			echo "<script>window.location.href='HomePage.php';</script>";

}
else
{
	$stmt = $conn->prepare("INSERT INTO citizen(name, email, Password)
			VALUES (?, ?, ?)");

	$stmt->bind_param('sss',$name,$email,$psw);
	$p=$stmt->execute();
if(!$p)
		{
			echo "Not inserted";
			$stmt->close();

		}
else
{
	$stmt->close();

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
	else
		echo "<script>window.alert('some error occured');</script>";


}
}




?>

