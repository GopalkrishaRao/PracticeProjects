<?php echo "<h2> Connect to Server <br>"; ?>

<?php
// Connecting to the server
$serverName = "localhost";
$username = "root";
$password = "";

// Create a connection
$conn = mysqli_connect($serverName, $username, $password);


// Check connection 
if(!$conn){
    die("Sorry, Failed to Connect to server" . mysqli_connect_error()) . "<br>";
} else {
    echo "Successfully connected to server<br>";
};

?>