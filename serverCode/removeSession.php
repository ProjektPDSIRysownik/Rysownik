<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

$sql = 'TRUNCATE TABLE `currentlyloggedinuser`';
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "Usunieto z bazy - wylogowano";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

    $conn->close();
?>