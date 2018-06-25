<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

if (!isset($myObj)) 
    $myObj = new stdClass();

$myObj->status = "NO";

$sql = "SELECT `login`, `Password`, `email` FROM currentlyLoggedInUser";
$result = $conn->query($sql);

if ($result->num_rows == 0) 
{
    $myObj->status = "OK";
}

$myJSON = json_encode($myObj);
echo $myJSON;

$conn->close();

?>