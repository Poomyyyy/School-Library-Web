<?php
        $db_host = "localhost";
        $db_name = "db_books";
        $db_user = "root";
        $db_password = "";

try {
    $db = new PDO("mysql:host={$db_host}; dbname={$db_name}", $db_user, $db_password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "pass";
} catch (PDOException $e) {
    $e->getMessage();
}
