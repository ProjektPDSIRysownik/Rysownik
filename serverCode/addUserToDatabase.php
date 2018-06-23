<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$login = $_POST["login"];
$passwd = $_POST["passwd"];
$email = $_POST["email"];

$sql = 'INSERT INTO `users` (`login`, `Password`, `email`) VALUES ("' . $login . '","' . $passwd . '","' . $email . '")';
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>