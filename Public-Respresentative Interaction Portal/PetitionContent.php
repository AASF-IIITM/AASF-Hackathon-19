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
$post_id=$_GET['post_id'];
if(!isset($_SESSION['user_id']))
  {echo "<script>window.alert('Login first!');</script>";
    echo "<script>window.location.href='HomePage.php';</script>";} 
?>

<!DOCTYPE html>
<html>
<head>
    <title> Petition </title>
    <link rel="stylesheet" type="text/css" href="KnowYourLeaders.css">
    <link rel="stylesheet" type="text/css" href="NavigationBar.css">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        li{
            display: inline;
        }

        body{
            background-color: #E8E8E8;
        }
        .content{
            margin-top:10vw;
            margin-left: 5vw;
            margin-right: 5vw;
            margin-bottom:10vw;
            background-color: white;color:black; box-shadow: 0 1vw 1vw 0 black, 0 1vw 1vw 0 black;
        }
        .meter { 
  height: 1vw;  /* Can be anything */
  position: relative;
  background: #555;
  -moz-border-radius: 1vw;
  -webkit-border-radius: 1vw;
  border-radius: 1vw;
  padding: 0.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
  /*box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);*/
}
.meter > span {
  display: block;
  font-size: 0.8vw;
  color: white;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43,194,83);
  background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
  );
  box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}

    </style>



</head>

    <script>
      function commenFill(){
        var output =  "<?php 
      ob_start();
      $p="SELECT * FROM comments_petitions where post_id=$post_id ORDER BY time DESC";
        $res=mysqli_query($conn,$p);
        while($row=mysqli_fetch_array($res)){
          echo '<p>'.$row['content'].'</p>';
          echo  '<h5>'.$row['time'].'</h5>';
          $content = ob_get_clean();
          echo $content;
      }
    ?>";
    document.getElementById('comments').innerHTML = output;
};
window.onload = commenFill;
</script>
<body>
  <?php include "NavigationBar.php"?>
  <div class="content">

<?php
        $p="SELECT * FROM petitions Where post_id=$post_id AND approve=1";
        $res=mysqli_query($conn,$p);
        while($row=mysqli_fetch_array($res)){
        echo '<h2  class="font"><center>'.$row['title'].'</center></h2>';
        echo '<div class="fontcontent">';
        echo '<p>Date:'.$row['upload_date'].'</p>';
        echo '<div style="text-align: right;">';
        echo '<button style="font-size:1.5vw;margin-right: 1vw;" class="fa" onclick=fun() id="like">&#xf087;&nbsp;'.$row['votes'].'</button>&nbsp;
        </div></div>';
           echo '<h5>'.$row['content'].'</h5><hr>

    </div>
   <hr style="margin-top: 2vw;">';
   $post_id=$row['post_id'];

   echo ' <div class="meter">';
   if($row['Status']==0)
  {echo '<span style="width: 33.3%"></span><br>';
  echo '<b><Center>FILED</Center></b></div><br><br><br>
<div>';}
elseif($row['Status']==1)
{echo '<span style="width: 66.6%"></span><br>';
  echo '<b><Center>Mail Sent</Center></b></div><br><br><br>
<div>';}
else{
  echo '<span style="width: 100 %"></span><br>';
  echo '<b><Center>Taken into considersation</Center></b></div><br><br><br>
<div>';
}
    }?><strong>Comments:</strong>
    <?php echo '<div class="fontcontent"><center><form action="CommentPetition.php" method="GET" id="CommentP">
      <textarea style="width: 90%;" rows="5" name="Comment" id="Comment" form="CommentP"></textarea>
      <input type="hidden" name="post_id" value="'.$post_id.'" id="post_id">
      <center><input type="submit" name="submit"></center>
    </form></center></div>' ?></div>
    <!-- <script >
    function gonder() {
      var post_id = $('#post_id').val();
      var content = $('#Comment').val();
      if( content == "") exit(); 
      
      $('#comments').html('<span>Please Wait...</span>');
      $('#comments').show(300);

      $.ajax( {
        type: "GET",
        url: "CommentParliament.php",
        data:$('#CommentP').serialize(),
        success: function(cevap) {
          $('#info').show();
          if(cevap!=''){
            commenFill();
          }
        }
      });
    }
    
    </script> -->
    <div id="comments" class="fontcontent">
      <?php 
      ob_start();
      $p="SELECT * FROM comments_petitions where post_id=$post_id";
        $res=mysqli_query($conn,$p);
        while($row=mysqli_fetch_array($res)){
          echo '<p>'.$row['content'].'</p>';
          echo  '<h5>'.$row['time'].'</h5><hr>';
          $content = ob_get_clean();
          echo $content;
      }
    ?>
    </div>  
    </div>

    <script type="text/javascript">
  function fun(){
    document.getElementById('like').onclick = function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
          document.getElementById('like').innerHTML = '&#xf087;&nbsp'+this.responseText;
        }
      }

      xhttp.open('GET', 'likepetition.php?post_id='+<?php echo $post_id;?>, true);
      xhttp.send();
    }
  }
</script>
</body>
</html>