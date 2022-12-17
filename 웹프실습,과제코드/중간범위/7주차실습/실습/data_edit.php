<?php

$myfile = fopen("data.txt", "r");
$bt = $_POST['before'];
$at = $_POST['after'];
$db = array();
$i = 0;
while (!feof($myfile)) {
    $Line = fgets($myfile) . "<br>";
    $Split = explode("|", $Line);
    $name = $Split[0];
    $hei = (int)$Split[1];

    if ($hei == $bt) {
        $db[$i] =$name."|".$at;
        echo $name."의 키".$hei."cm 정보가 수정되었습니다."."<br>";
        echo "수정 후 키 : ".$at;
    } else {
        $db[$i] =$name."|".$hei;
    }
    $i+=1;
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