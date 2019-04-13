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
    <title> Proposal </title>
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

    </style>



</head>

    <script>
    	function commenFill(){
    		var output =  "<?php 
    	ob_start();
    	$p="SELECT * FROM comments_parliament where post_id=$post_id ORDER BY comment_time DESC";
        $res=mysqli_query($conn,$p);
        while($row=mysqli_fetch_array($res)){
        	echo '<p>'.$row['content'].'</p>';
        	echo  '<h5>'.$row['comment_time'].'</h5>';
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
        $p="SELECT * FROM parliament Where post_id=$post_id ";
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
    }?><strong class="font">Comments:</strong>
    <?php echo '<div class="fontcontent"><center><form action="CommentParliament.php" method="GET" id="CommentP">
    	<textarea style="width: 90%;" rows="5" name="Comment" id="Comment" form="CommentP"></textarea>
    	<input type="hidden" name="post_id" value="'.$post_id.'" id="post_id">
    	<center><input type="submit" name="submit"></center>
    </form></center></div>' ?>
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
    	$p="SELECT * FROM comments_parliament where post_id=$post_id ORDER";
        $res=mysqli_query($conn,$p);
        while($row=mysqli_fetch_array($res)){
        	echo '<p>'.$row['content'].'</p>';
        	echo  '<h5>'.$row['comment_time'].'</h5><hr>';
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

      xhttp.open('GET', 'like.php?post_id='+<?php echo $post_id;?>, true);
      xhttp.send();
    }
  }
</script>
</body>
</html>