<?php
// Accept POST and send mail silently; always return OK to the client
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo 'OK';
  exit;
}

function sanitize_line($v) {
  $v = trim((string)$v);
  return str_replace(["\r", "\n"], ' ', $v);
}

$name = isset($_POST['name']) ? sanitize_line($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_line($_POST['email']) : '';
$subject = isset($_POST['subject']) ? sanitize_line($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim((string)$_POST['message']) : '';

$to = 'devoraofficial11@gmail.com';
$subjectLine = $subject !== '' ? $subject : 'New Contact Form Submission';
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = [];
$headers[] = 'From: Devora <tirthgajera12345@gmail.com>';
if ($email !== '') {
  $headers[] = 'Reply-To: ' . $email;
}
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

@mail($to, $subjectLine, $body, implode("\r\n", $headers));
echo 'OK';
