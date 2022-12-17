<?php

$input = $_POST['delData'];
$type = $_POST['profile'];

$myfile = fopen("data.txt", "r");
$db = array();
$i = 0;
while (!feof($myfile)) {
    $Line = fgets($myfile) . "<br>";
    $Split = explode("|", $Line);
    $name = $Split[0];
    $hei = (int)$Split[1];

    if ($type == "pheight") {
        if ($hei > (int)$input) {
            $db[$i] = $name."|".$hei;
            $i +=1;
        } else {
            echo $hei."cm 인 ".$name."의 정보가 삭제되었습니다."."<br>";
        }
    } else {
        if ($name == $input) {
            echo $hei."cm 인 ".$name."의 정보가 삭제되었습니다."."<br>";
        } else {
            $db[$i] = $name."|".$hei;
            $i +=1;
        }
    }
}
fclose($myfile);
unlink("data.txt");
$myfile=fopen("data.txt", "a+");

for ($j = 0; $j < count($db);$j++) {
    if ($j ==0) {
        fwrite($myfile, $db[$j]);
    } else {
        fwrite($myfile, "\n");
        fwrite($myfile, $db[$j]);
    }
}
fclose($myfile);
?>