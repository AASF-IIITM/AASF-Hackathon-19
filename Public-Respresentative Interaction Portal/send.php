<?php
session_start();
  require("/opt/lampp/htdocs/phpmailer/class.phpmailer.php");
  require("/opt/lampp/htdocs/phpmailer/class.smtp.php");

    $mail = new PHPMailer;
    $mail->IsSMTP(); // enable SMTP

    $mail->SMTPDebug = 4; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.gmail.com:465";
    $mail->Port = 587; // or 587
    $mail->IsHTML(true);
    $mail->Username = "aditisingh2362@gmail.com";
    $mail->Password = "05422362583";
    $mail->SetFrom("aditisingh2362@gmail.com");
    $mail->Subject = $_GET['title'];
    $mail->Body = $_GET['content'];
    $mail->AddAddress('adusingh2362@gmail.com');

    $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent";
        echo "<script>window.location.href='HomePage.php';</script>"; 
     }
?>