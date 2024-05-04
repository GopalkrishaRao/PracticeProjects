
<?php
$fileToWrite=fopen("./sampleFile2.txt", "w");

fwrite($fileToWrite, "Line:1-This is the test file\n");
fwrite($fileToWrite, "Line:2-This is the test file");

fclose($fileToWrite);
?>