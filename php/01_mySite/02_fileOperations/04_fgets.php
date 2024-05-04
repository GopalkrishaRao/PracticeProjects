<?php
$fileToRead=fopen("./sampleFile.txt", "r");

// fgetc reads charectr by character

echo "Reading file character by character using while loop with fgetc";

while($a=fgetc($fileToRead)){
    echo "<br>";
    echo $a;
};
echo "End of the line has reached";

// Close file
fclose($fileToRead);
?>