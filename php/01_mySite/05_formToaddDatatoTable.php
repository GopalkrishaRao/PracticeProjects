<?php
// Connecting to the server
$serverName = "localhost";
$username = "root";
$password = "";
$database = "gkMySite";
$tableName = "employees";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $name = $_POST["name"];
    $role = $_POST["role"];

    // Create a connection with server and database
    $conn = mysqli_connect($serverName, $username, $password, $database);

    if (!$conn) {
        die("Sorry, Failed to Connect to server" . mysqli_connect_error());
    } else {
        echo "Successfully connected to db $database of server<br>";
    }

    // SQL query to insert data into table
    $sql = "INSERT INTO `employees` (`Name`, `Role`) VALUES ('$name', '$role')";

    $result = mysqli_query($conn, $sql);

    // Check table insertion success or not
    if ($result) {
        echo "Successfully inserted a record  ($name, $role) into Table $tableName <br>";
    } else {
        echo "Failed to insert record into table $tableName because " . mysqli_error($conn) . "<br>";
    }
}
?>
