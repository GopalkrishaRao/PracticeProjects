<?php
echo "<h2> Show data from database</h2> <br>";

// connect to server
require "./01_connectingToServer.php";

$database = "gkMySite";
$tableName = "employees";

// Create a connection with server and database
$conn = mysqli_connect($serverName, $username, $password, $database);

if(!$conn) {
    die("Sorry, Failed to Connect to server" . mysqli_connect_error());
} else {
    echo "Successfully connected to db $database of server<br>";
}

// SQL query to select all records from the table
$sql = "SELECT * FROM $tableName";

// Execute query
$result = mysqli_query($conn, $sql);

// Find number of records returned
$num=mysqli_num_rows($result);

echo "Total Number of Records - $num <br>";


echo "Contents of the table $tableName <br>";
// Check if there are any records returned
if($num > 0) {
    echo "<table border='1'>";
    echo "<tr><th>Sl No</th><th>Name</th><th>Role</th></tr>";

    // Loop through each row of the result set
    $tabSlNo=1;
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $tabSlNo . "</td>";
        echo "<td>" . $row['Name'] . "</td>";
        echo "<td>" . $row['Role'] . "</td>";
        echo "</tr>";
        $tabSlNo ++;
    }

    echo "</table>";
} else {
    echo "No records found in table $tableName";
}

// Close the connection
mysqli_close($conn);

?>