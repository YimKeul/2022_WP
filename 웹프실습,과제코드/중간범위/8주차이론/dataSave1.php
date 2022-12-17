<?php

$myfile = fopen("data.txt", "a") or die("Unable to open file!");
$name =$_POST["name"];
$date = $_POST["date"];
$weight = (int)$_POST["weight"];

$input_data = array("name" =>$name, "birthdate"=>$date,"weight"=>$weight);

if (filesize("data.txt") == 0) {
    fwrite($myfile, json_encode($input_data,JSON_UNESCAPED_UNICODE));
    echo "저장되었습니다.";
    fclose($myfile);
} else {
    fwrite($myfile, "\n");
    fwrite($myfile, json_encode($input_data,JSON_UNESCAPED_UNICODE));
    echo "저장되었습니다.";
    fclose($myfile);
}








?>