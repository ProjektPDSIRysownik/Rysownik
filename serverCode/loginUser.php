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
$passwd = $_POST["passwd"];

$output = array();
$sql = "SELECT * FROM `users` WHERE `login`='$login'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();
    $passwordFromRequest = $row['Password'];
    $passwd = hash('sha1', $passwd);

    if($passwd == $passwordFromRequest){
        $output['msg'] = "Zalogowano pomyslnie!";
        $output['add_info'] = $row['login'];
    }
    else{
        $output['msg'] = "Niepoprawne haslo!";
        $output['add_info'] = "empty";
    }

}else{
    $output['msg'] = "Brak uzytkownika o takim loginie!";
    $output['add_info'] = "empty";
}

echo json_encode($output);

$conn->close();
?>