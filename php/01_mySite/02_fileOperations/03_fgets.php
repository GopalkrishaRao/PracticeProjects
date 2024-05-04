<?php


$fileToRead=fopen("./sampleFile.txt", "r");

// fgets reads line by line

// echo fgets($fileToRead);
// echo "<br>";
// echo fgets($fileToRead);
// echo "<br>";
// echo fgets($fileToRead);
// echo "<br>";


// or use it in a while loop

echo "Reading file line by line using while loop with fgets";

while($a=fgets($fileToRead)){
    echo "<br>";
    echo $a;
};
echo "End of the line has reached";

// Close file
fclose($fileToRead);
?>