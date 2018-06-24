<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";
print "dupa";
return "dupsko"
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$login = $_POST["login"];
$passwd = $_POST["passwd"];
$sql = ("SELECT * FROM users u WHERE u.login ='$login' AND u.Password='$passwd'");
//$sql = 'SELECT `login`, `Password` FROM `users` WHERE '$login
//$sql = 'INSERT INTO `users` (`login`, `Password`, `email`) VALUES ("' . $login . '","' . $passwd . '","' . $email . '")';
if ($conn->query($sql) === TRUE) {
    echo "User found";
    //return TRUE;
    return "CHUJ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    return "CHUJ";//return FALSE;
}

$conn->close();

?>