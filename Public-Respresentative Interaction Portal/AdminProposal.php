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



    if(isset($_POST['Send']))
    {
        $sub=$_POST['subject'];
    $body=$_POST['body'];
    $state=$_POST['state'];
    $constituency=$_POST['constituency'];
    
    if($stmt = $conn->prepare("INSERT INTO parliament(votes,upload_date,title,content,state,consitutency) VALUES(0,now(),?,?,?,?)"))
    {
        $stmt->bind_param('ssss',$sub,$body,$state,$constituency);
    $stmt->execute();
    $stmt->close();
}
       


    
 } 

 

    

?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div  style="background-color: orange;">
<p class="headings content">Proposal</p>
<form action="AdminProposal.php" method="POST" class="form-container" style="margin-bottom: 2vw; ">
    <label for="subject"><b>Title<br></b></label>
    <input type="text" placeholder="Subject" name="subject" required><br>
    <label for="body"><b>Content<br></b></label>
    <textarea placeholder="Message" name="body" style="height: 15vw;width: 24vw; margin-bottom: 1vw;" required></textarea><br>
    <label for="state"><b>State<br></b></label>
    <input type="text" placeholder="Subject" name="state" required><br>
    <label for="constituency"><b>Constituency<br></b></label>
    <input type="text" placeholder="Subject" name="constituency" required><br>
    <input type="submit" name="Send" value="Send" class="btn" >
   </form>
</div>
</body>
</html>
