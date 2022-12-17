<?php
    $name = $_POST['name'];
    $check = $_POST['check'];

    $arrName = array();
    $arrCheck = array();
    $myFile2 = fopen("data.json", "r");
    while(!feof($myFile2)) {
        $data = fgets($myFile2);
        if($data == "") {
            continue;
        }
        $data = json_decode($data);
        if($check == "학과") {
            $len = strlen($name);
            $text = substr($data->dept, 0, $len);
            if($text == $name) {
                echo('<li><span class="blue">'.$data->dept.', </span>'.$data->name."</li>");
            }
        }
        else {
            $len = strlen($name);
            $text = substr($data->name, 0, $len);
            if($text == $name) {
                echo('<li>'.$data->dept.', <span class="blue">'.$data->name."</span></li>");
            }
        }
    }
?>