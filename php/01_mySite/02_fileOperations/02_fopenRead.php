<?php
$fileToRead=fopen("./sampleFile.txt", "r");


$filecontent=fread($fileToRead, filesize("./sampleFile.txt"));

echo $filecontent;
// close file
fclose($fileToRead);

?>