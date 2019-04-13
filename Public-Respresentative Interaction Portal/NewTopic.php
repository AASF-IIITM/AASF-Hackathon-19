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

if(isset($_SESSION['user_id']))
{
    if(isset($_POST['Send']))
    {$sub=$_POST['subject'];
    $body=$_POST['body'];
    $state=$_POST['state'];
    $constituency=$_POST['constituency'];
    $userid=$_SESSION['user_id'];
    if($stmt = $conn->prepare("INSERT INTO petitions(votes,upload_date,title,content,user_id,state,consitutency,approve) VALUES(0,now(),?,?,$userid,?,?,0)"))
    {$stmt->bind_param('ssss',$sub,$body,$state,$constituency);
    $stmt->execute();
    $stmt->close();}
       
}

    
 } 

 else{
            echo "<script>window.alert('Login to start A New Topic!');</script>";
            echo "<script>window.location.href='HomePage.php';</script>"; 

 }  


?>

<!DOCTYPE html>
<html>
<head>
	<title>Submit A Petition</title>
	<link rel="stylesheet" type="text/css" href="HomePage.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script>
	<script src="jquery.localscroll.js" type="text/javascript"></script> 
	<script src="jquery.scrollTo.js" type="text/javascript"></script> 
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
		body{
            background-color: #E8E8E8;
        }

		.Pink{
    background-color: pink;
    width: 90%;
    margin-left: 2vw;
    border-radius: 2vw;

}

.Button1 {
    background-size: cover;
    display: block;
    color: black;
    border: 0.1vw solid black;
    transition: all .3s;
    -webkit-transition: all .3s;
    cursor: pointer;
    opacity: 1;
    border-radius: 90vw;
    height: 4vw;
    width: 4vw;
    margin-bottom: 2vw;
 	box-shadow: 0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5);
    text-align: center;
    padding: 0.5vw 1vw;
    white-space: pre-wrap;
    float: left;
}
.Button1{
    opacity: 1;
}
.answer{
    padding-top: 19vw;
}
</style>
</head>
<body>
    <?php include 'NavigationBar.php' ?>


<div>
<p class="headings content font" style="margin-top: 5vw; text-align: center; font-size: 3vw;">Send Us your Petition</p>
<form action="NewTopic.php" method="POST" class="form-container" style="margin-bottom: 2vw; ">
    <label for="subject"><b>Title<br></b></label>
    <input type="text" placeholder="Subject" name="subject" required><br>
    <label for="body"><b>Content<br></b></label>
    <textarea placeholder="Message" name="body" style="height: 15vw;width: 24vw; margin-bottom: 1vw;" required></textarea><br>
    <label for="state"><b>State<br></b></label>
    <select name="state" id="stateSel" size="1">
    <option value="" selected="selected">Select State</option>
    </select>
<br>
<br>
<label for="constituency"><b>Constituency<br></b></label>
 <select name="constituency" id="districtSel" size="1">
<option value="" selected="selected">Please select State first</option>
</select><br><br>

    <input type="submit" name="Send" value="Send" class="btn" >
   </form>
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