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

$output = array();

$sql = "SELECT `login`, `Password`, `email` FROM currentlyLoggedInUser";
$result = $conn->query($sql);

if ($result->num_rows == 0) 
{
    $output['msg'] = "BRAK";
}
else
{
    $output['msg'] = "JEST";
}

echo json_encode($output);

$conn->close();
?>