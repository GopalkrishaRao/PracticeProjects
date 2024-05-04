<?php echo "<h2> Connect to Server and Create Database </h2> <br>"; ?>

<?php
// Connecting to the server
$serverName = "localhost";
$username = "root";
$password = "";

// Create a connection
$conn = mysqli_connect($serverName, $username, $password);


// Check connection 
if(!$conn){
    die("Sorry, Failed to Connect to server" . mysqli_connect_error());
} else {
    echo "Successfully connected to server<br>";
};


// Creating the database if it doesn't exist

$dbName="gkMySite";
$sql = "CREATE DATABASE IF NOT EXISTS $dbName";

// Run sql querry
$result = mysqli_query($conn, $sql);

if($result){
    echo "The database $dbName created successfully <br>";
} else {
    echo "Failed to create database $dbName because ". mysqli_error($conn) . "<br>";
};
?>
