<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>User Data</h1>
    <ul>
        <?php foreach ($users as $user): ?>
            <li>
                <strong>Name:</strong> <?php echo $user['name']; ?><br>
                <strong>Email:</strong> <?php echo $user['email']; ?><br>
                <strong>Phone:</strong> <?php echo $user['phone']; ?><br>
                <!-- Add more fields as needed -->
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>