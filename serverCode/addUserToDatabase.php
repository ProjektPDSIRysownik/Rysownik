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
$email = $_POST["email"];

$sql = 'SELECT * FROM `users` WHERE `login`="'.$login.'"';
$result = $conn->query($sql);
    if ($result->num_rows <= 0) {
        $output = array();

        $passwd = hash('sha1', $passwd);

        $sql = 'INSERT INTO `users` (`login`, `Password`, `email`) VALUES ("' . $login . '","' . $passwd . '","' . $email . '")';
        if ($conn->query($sql) === TRUE) {
           echo "OK";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }else{
        echo "Taki login już istnieje";
    }

$conn->close();
?>