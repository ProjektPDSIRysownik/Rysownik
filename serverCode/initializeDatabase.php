<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rysownik";

$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "CREATE DATABASE rysownik";
if ($conn->query($sql) === TRUE) 
{
    echo "Database created successfully\r\n";
} 
else 
{
    echo "Error creating database: " . $conn->error;
}
$conn->close();


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 



//////////////////////////////////////////////////
/////////////////////USERS////////////////////////
//////////////////////////////////////////////////



$sql = "CREATE TABLE Users (
    User_ID INT(6) AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    email VARCHAR(100)
    )";


if ($conn->query($sql) === TRUE) 
{
    echo "Table created successfully\r\n";
} 
else 
{
    echo "Error creating table: " . $conn->error;
}



//////////////////////////////////////////////////

$sql = "INSERT INTO `users`(`login`, `Password`, `email`) VALUES ('marcin12', 'hashedpasswd','dawi@daks.pl')";
if ($conn->query($sql) === TRUE) {
    echo "Test record created successfully.\r\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//////////////////////////////////////////////////
/////////////////////IMAGE////////////////////////
//////////////////////////////////////////////////



$sql = "CREATE TABLE imageTable (
    Image_ID INT(6) AUTO_INCREMENT PRIMARY KEY,
    User_ID INT(6),   
    FOREIGN KEY (User_ID) 
        REFERENCES Users(User_ID),
    IMAGE VARCHAR(30) NOT NULL
    )";

if ($conn->query($sql) === TRUE) 
{
    echo "Table created successfully\r\n";
} 
else 
{
    echo "Error creating table: " . $conn->error;
}



//////////////////////////////////////////////////



$sql = "INSERT INTO `imageTable`(`User_ID`, `IMAGE`) VALUES (1,'superKodUrLDoObrazka')";

if ($conn->query($sql) === TRUE) {
    echo "Test record created successfully.\r\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//////////////////////////////////////////////////
///////////////////CURRLOGUSER////////////////////
//////////////////////////////////////////////////

/*
This table is supposed to store either zero values 
or one value to identify the user 
that was logged into the app for the last time
*/

$sql = "CREATE TABLE currentlyLoggedInUser (
    login VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    email VARCHAR(100)
    )";


if ($conn->query($sql) === TRUE) 
{
    echo "Table created successfully\r\n";
} 
else 
{
    echo "Error creating table: " . $conn->error;
}



//////////////////////////////////////////////////


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


?>