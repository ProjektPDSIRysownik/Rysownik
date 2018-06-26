<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";
$msg = "";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$login = $_POST["login"];

$output = array();

$sql = "SELECT User_ID FROM `users` WHERE `login`='$login'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();
    $user_id = $row['User_ID'];

    $sql = "SELECT IMAGE FROM `imagetable` WHERE `User_ID`='$user_id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {

        $images = array();
        for ($row_no = $result->num_rows - 1; $row_no >= 0; $row_no--) {
            $result->data_seek($row_no);
            $row = $result->fetch_assoc();
            $images[$row_no] = $row['IMAGE'];
        }

        $row = $result->fetch_assoc();
        $output['msg'] = "Pobrano obrazy!";
        $output['add_info'] = array_values($images);
    } else {
        $output['msg'] = "Brak obrazow!";
        $output['add_info'] = "empty";
    }

} else {
    $output['msg'] = "Brak uzytkownika o takim loginie!";
    $output['add_info'] = "empty";
}

echo json_encode($output);

$conn->close();
?>