<?php

 $infoArray = array();  //data.txt 데이타가 배열로 저장됨

 function test_input($data) {
        $data = ltrim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
}

 $ofile = fopen("data.json", "r"); // 파일열기

 $arrIndex = 0;

 while(!feof($ofile)) {

    $str = fgets($ofile);

    $obj = json_decode($str);
          
    $infoArray[$arrIndex][0] = $obj->dept;
    $infoArray[$arrIndex][1] = $obj->name;

    $arrIndex++;
 }
 fclose($ofile);

 // 웹 페이지에서 값 읽어 오기
  $fstr1 = test_input($_POST['searchVal']);
  $nstr1 = test_input($_POST['ckVal']);

//  $fstr1 = ltrim($fstr);

  if($nstr1 == 'dept') {

      $fstr_len = strlen($fstr1);

      for ($row = 0; $row < count($infoArray); $row++) {

         $nameSub = substr($infoArray[$row][0], 0, $fstr_len);
          echo "test : $fstr1 , $nameSub<br>";
          if(strcasecmp($fstr1, $nameSub) == 0) {
            echo "<li><b>".$infoArray[$row][0].", </b>".$infoArray[$row][1]."</li>";
          } 
      }
  } else {

      $fstr_len = strlen($fstr1);

      for ($row = 0; $row < count($infoArray); $row++) {

         $nameSub = substr($infoArray[$row][1], 0, $fstr_len);

          if(strcasecmp($fstr1, $nameSub) == 0) {
            echo "<li>".$infoArray[$row][0].", <b>".$infoArray[$row][1]."</b></li>";
          } 
      }

  }

 ?>