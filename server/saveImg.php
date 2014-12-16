<?php

date_default_timezone_set('Europe/Amsterdam');

$rawData = $_POST['imgBase64'];
$filteredData = explode(',', $rawData);
$unencoded = base64_decode($filteredData[1]);

$datime = date("Y-m-d-H.i.s", time() ) ; # - 3600*7

// name & open the image file
$fp = fopen('images/'.$datime.'.jpg', 'w');
fwrite($fp, $unencoded);
fclose($fp);

// name & open the image file
$fp = fopen('images/latest.jpg', 'w');
fwrite($fp, $unencoded);
fclose($fp);


?>