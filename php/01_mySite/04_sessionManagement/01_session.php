<?php

// verify the user login info
session_start();
$_SESSION['username']="GK";
$_SESSION['favCat']="Books";

echo "Your session has been saved";


?>