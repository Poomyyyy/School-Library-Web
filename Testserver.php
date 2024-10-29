<?php

//connection server php
$servername = "localhost";
$dbname = "csv_db";
$username = "root";
$password = "";

$obj = "mysql:host=$servername;dbname=$dbname;charset=utf8";

try {
  // set the PDO error mode to exception
  $pdo = new PDO($obj, $username,$password);
  echo "Connected successfully";

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>