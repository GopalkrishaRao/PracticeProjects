<?php
echo "<h2> Update data from Database</h2> <br>";

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

// Check if form is submitted for updating
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    // Get data from the form
    $id = $_POST["id"];
    $name = $_POST["name"];
    $role = $_POST["role"];

    // SQL query to update data in the table
    $sql = "UPDATE $tableName SET Name='$name', Role='$role' WHERE id=$id";

    $result = mysqli_query($conn, $sql);

    // Check if the update was successful
    if ($result) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
}

// Check if form is submitted for deleting
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete'])) {
    // Get data from the form
    $id = $_POST["id"];

    $result = mysqli_query($conn, $sql);

    // Check if the deletion was successful
    if ($result) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }
}

// SQL query to select all records from the table
$sql = "SELECT * FROM $tableName";

// Execute query
$result = mysqli_query($conn, $sql);

// Find number of records returned
$num = mysqli_num_rows($result);

echo "Total Number of Records - $num <br>";

echo "Contents of the table $tableName <br>";

// Check if there are any records returned
if($num > 0) {
    echo "<table border='1'>";
    echo "<tr><th>Sl No</th><th>Name</th><th>Role</th><th>Action</th></tr>";

    // Initialize the serial number counter
    $tabSlNo = 1;

    // Loop through each row of the result set
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $tabSlNo . "</td>";
        echo "<td>" . $row['Name'] . "</td>";
        echo "<td>" . $row['Role'] . "</td>";
        echo "<td>
                <form method='post'>
                    <input type='hidden' name='id' value='" . $row['id'] . "'>
                    <input type='text' name='name' placeholder='New Name'>
                    <input type='text' name='role' placeholder='New Role'>
                    <button type='submit' name='update'>Update</button>
                    <button type='submit' name='delete'>Delete</button>
                </form>
              </td>";
        echo "</tr>";

        // Increment the serial number
        $tabSlNo++;
    }

    echo "</table>";
} else {
    echo "No records found in table $tableName";
}

// Close the connection
mysqli_close($conn);
?>
