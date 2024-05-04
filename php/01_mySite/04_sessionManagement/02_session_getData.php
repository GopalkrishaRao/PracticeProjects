<?php
// Start Session and get data

session_start();
if(isset($_SESSION['username'])){
    echo "Welcome ". $_SESSION['username'] . "<br>";
    echo "Your favorite caterogy is ". $_SESSION['favCat']. "<br>";
    
    echo "We have started your session";
}else{
    echo "Login to continue";
}


?>