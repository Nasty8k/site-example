<?php

$method = $_SERVER['REQUEST_METHOD'];

// Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = "geekycats";
	$admin_email  = "admin@email.ru";
	$form_subject = "Заявка с сайта";

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" ) {
			$message .=
			"<tr>
				<td style='padding: 10px;>$key</td>
				<td style='padding: 10px;>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
