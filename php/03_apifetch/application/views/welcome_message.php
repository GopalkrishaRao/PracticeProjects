<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h2>Click button to fetch data</h2>
  
    <?=
        form_open('Fetchapi/fetchData'),
        form_submit(['name'=>'submit','value'=>'Fetch',]), form_close();
    ?>
</body>
</html>