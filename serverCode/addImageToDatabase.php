<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";
$msg = "";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

$login = $_POST["login"];
$image = $_POST["image"];

$output = array();
$sql = "SELECT User_ID FROM `users` WHERE `login`='$login'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $user_id = $row['User_ID'];

    $sql = "INSERT INTO `imagetable` (`User_ID`, `IMAGE`) VALUES (' $user_id', '$image' )";
    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}else{
    echo "Nie ma takiego użytkownika";
}

$conn->close();
?>