<?php
echo "<h2> Create Table in DB</h2> <br>";

// Connect to server and db
require "./01_connectingToServer.php";


$dtatabase="gkMySite";
// Create a connection with server and data base
$conn = mysqli_connect($serverName, $username, $password, $dtatabase);


// Create table in DB
$tableName="employees";

$sql="CREATE TABLE $tableName (`empId` INT NOT NULL AUTO_INCREMENT , `Name` VARCHAR(40) NOT NULL , `Role` VARCHAR(40) NOT NULL, PRIMARY KEY (`empId`))";


$result = mysqli_query($conn, $sql);
// Chech table creation success or not
if($result){
    echo "The table $tableName created successfully <br>";
} else {
    echo "Failed to create table $tableName because ". mysqli_error($conn) . "<br>";
};

?>