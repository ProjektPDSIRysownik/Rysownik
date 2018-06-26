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

$login = $_POST["login"];

$sql = 'INSERT INTO `currentlyloggedinuser` (`login`, `Password`, `email`) VALUES ("' . $login . '"," test "," test ")';
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "OK";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>