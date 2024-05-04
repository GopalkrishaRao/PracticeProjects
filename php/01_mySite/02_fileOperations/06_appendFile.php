
<?php
$fileToAppend=fopen("./sampleFile2.txt", "a");

fwrite($fileToAppend, "Line:1-This is the test file to append");


fclose($fileToAppend);
?>