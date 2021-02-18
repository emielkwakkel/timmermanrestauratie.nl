<?php
	$to 		= 'mail@emielkwakkel.nl';
	$to_name 	= 'Emiel Kwakkel';
	$from 		= 'mail@emielkwakkel.nl';
	$from_name 	= 'emielkwakkel.nl';
	
	// Checking For Blank Fields..
	if($_POST["name"]=="Naam *"||$_POST["email"]=="Email *"||$_POST["message"]=="Bericht *"){
		echo "Fill All Fields..";
	}
	else
	{
		// Check if the "Sender's Email" input field is filled out
		$email=$_POST['email'];
		
		// Sanitize E-mail Address
		$email =filter_var($email, FILTER_SANITIZE_EMAIL);
		
		// Validate E-mail Address
		$email= filter_var($email, FILTER_VALIDATE_EMAIL);
		
		if (!$email){
			echo "Invalid Sender's Email";
		}
		
		else {
			$message = "<p><strong>Er is een bericht verstuurd via emielkwakkel.nl</strong></p>\r\n";
			$message .= "<p><strong>Naam: </strong>" . $_POST['name'] . "</p>";
			$message .= "<p><strong>Email: </strong>" . $_POST['email'] . "</p>";
			$message .= "<p><strong>Bericht: </strong>" . $_POST['message'] . "</p>";
			$headers = 'From:'. $email . "\r\n"; // Sender's Email
			
			// To send HTML mail, the Content-type header must be set
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			
			// Additional headers
			//$headers .= 'To: ' . $to_name . ' <' . $to . '>' . "\r\n";
			$headers .= 'From: ' . $from_name . ' <' . $from . '>' . "\r\n";

			
			mail($to, $subject, $message, $headers);
			echo "<p>Bedankt " . $_POST["name"] . " voor het versturen van je bericht.</p>";
		}
	}	
?>