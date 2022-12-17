<?php
  
  $fname = test_input($_POST["a1"]);
  $fcon = test_input($_POST["b1"]);

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  
  //data.txt에 동일한 화일이 존재하는 지 체크 

  $myfile=fopen("data.txt", "a+");

  if (filesize("data.txt") == 0) {

      fwrite($myfile, $fname."|".$fcon);
      echo "저장되었습니다.";
      fclose($myfile);
  } else {

      fwrite($myfile, "\n");
      fwrite($myfile, $fname."|".$fcon);
      echo "저장되었습니다.";
      fclose($myfile);
  }

?>