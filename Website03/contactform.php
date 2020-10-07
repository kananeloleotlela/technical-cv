<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mobile = $_POST['mobile'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_To = 'kelendrialeokar@gmail.com';
    $email_subject = "New CV email Submission";
    $email_body = "User Name: $name.'\n".
                    "User Surname: $surname.'\n".
                    "User Cell-number: $mobile.'\n".
                    "User Email: $visitor_email.'\n".
                    "User Message: $message.'\n";

    $to = "kelendrialeokar@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers = "Reply_To: $visitor_email \r\n";
    mail($to, $email_subject, $email_body, $headers);
    header("Location: home.html");
?>