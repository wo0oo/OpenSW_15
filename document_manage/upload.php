<?php
$source=$_FILES['upload_file']['tmp_name'];
$dest="./".basename($_FILES['upload_file']['name']);
move_uploaded_file($source,$dest);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
</head>
<body>
</body>
</html>