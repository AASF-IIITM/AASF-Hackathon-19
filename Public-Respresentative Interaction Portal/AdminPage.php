<?php
	
	session_start();
	if(isset($_POST['submit'])){
		$password=$_POST['psw'];

		if($password=='hiadmin'){
			$_SESSION['Admin']=1;
			echo "<script>window.alert('Hi Admin!');</script>";
		}
		else{
			echo "<script>window.alert('Incorrect Password');</script>";
			echo "<script>window.location.href='HomePage.php';</script>"; 

		}
	}
	


?>	
<!DOCTYPE html>
<html>
<head>
	<title>Admin Page</title>
</head>
<body>
	<form action="AdminPage.php" method="POST">
		<input type="password" name="psw" required>
		<input type="submit" name="submit">
	</form>
<?php
if(isset($_SESSION['Admin']))
	{
		echo "<a href='SelectPetitions.php'>See Pending Petitions</a><br>";
		echo "<a href='AdminProposal.php'>Send Proposal</a><br>";
		echo "<a href='SendMail.php'>Send Mail</a>";
	}
?>
	
</body>
</html>		