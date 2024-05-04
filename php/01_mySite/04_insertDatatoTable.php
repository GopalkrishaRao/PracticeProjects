<?php
    echo "<h2>Inserting Data into table</h2><br>";

    // connect to server
    require "./01_connectingToServer.php";

    $dtatabase="gkMySite";
    $tableName="employees";

    // Create a connection with server and data base
    $conn = mysqli_connect($serverName, $username, $password, $dtatabase);

    if(!$conn){
        die("Sorry, Failed to Connect to server" . mysqli_connect_error());
    } else {
        echo "Successfully connected to db $dtatabase of server<br>";
    };

    // sql querry to insert data into table
    $name="GK Rao";
    $role="Admin";
    
$sql="INSERT INTO `employees` (`Name`, `Role`) VALUES ('$name', '$role')";


$result = mysqli_query($conn, $sql);
// Chech table creation success or not
if($result){
    echo "Succefully inserted a record into Table $tableName <br>";
} else {
    echo "Failed to insert record into table $tableName because ". mysqli_error($conn) . "<br>";
};

?>