<?php
$det = $_POST['dDet'];
$name = $_POST['dName'];

echo "저장 : $det, $name";

$myfile = fopen("data.json", "a");
$myObj = array();
$myObj["dept"] = $det;
$myObj["name"] = $name;
$output = json_encode($myObj,JSON_UNESCAPED_UNICODE);
fwrite($myfile,$output."\n");
fclose($myfile);

?>