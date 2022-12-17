<?php
$_search = $_POST['dSearch'];
$_check = $_POST['dCheck'];

$myfile = fopen('data.json','r');
while(!feof($myfile)){

    $data = fgets($myfile);
    if($data == "") {
        continue;
    }
    $data = json_decode($data);
    if($_check == "det") {
        $len = strlen($_search);
        $text = substr($data->dept, 0, $len);
        if($text == $_search) {
            echo('<li><span class="blue">'.$data->dept.', </span>'.$data->name."</li>");
        }
    }
    else {
        $len = strlen($_search);
        $text = substr($data->name, 0, $len);
        if($text == $_search) {
            echo('<li>'.$data->dept.', <span class="blue">'.$data->name."</span></li>");
        }
    }


}

?>
