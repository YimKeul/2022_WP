<?php
$myfile = fopen("data.txt", "r");
$name = $_POST['name'];
$kg = (int)$_POST['kg'];
$db = array();
$i = 0;
while (!feof($myfile)) {
    $Line = fgets($myfile);
    $LineData  =json_decode($Line);
    $T_name = $LineData->name;
    $T_bd = $LineData->birthdate;
    $T_w = $LineData->weight;
    $input_data = array("name" =>$T_name, "birthdate"=>$T_bd,"weight"=>$T_w);
    $data =  json_encode($input_data,JSON_UNESCAPED_UNICODE);

    if ($name == $T_name) {
        $edit_data = array("name" =>$T_name, "birthdate"=>$T_bd,"weight"=>$kg);
        echo $T_name."의 몸무게".$T_w."를 ".$kg."로 수정합니다."."<br>";
        $db[$i] = json_encode($edit_data,JSON_UNESCAPED_UNICODE);
    } else {
        $db[$i] = $data;
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