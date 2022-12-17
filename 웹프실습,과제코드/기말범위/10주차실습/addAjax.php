<?php
    $myfile = fopen("data.json", "a");
    $myObj = array();
    $myObj["dept"] = $_POST["add_dept"];
    $myObj["name"] = $_POST["add_name"];
    $output = json_encode($myObj, JSON_UNESCAPED_UNICODE);
    fwrite($myfile,$output."\n");
    fclose($myfile);
    echo("저장 : ".$_POST["add_dept"].", ".$_POST["add_name"]);
?>