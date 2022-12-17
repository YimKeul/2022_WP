<!-- 회원가입 json만드는 php -->
<?php
  $upload_movie_screen_dir = './data';
  if(!is_dir('data')){
      mkdir($upload_movie_screen_dir);
  }

    $myfile = fopen("./data/person.json", "a+");
    $myObj = array();
    $myObj["Name"] = $_POST["Name"];
    $myObj["Password"] = $_POST["Password"];
    $output = json_encode($myObj, JSON_UNESCAPED_UNICODE);
    fwrite($myfile,$output."\n");
    fclose($myfile);
?>