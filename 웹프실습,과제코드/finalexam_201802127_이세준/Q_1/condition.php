<?php
 $selectData = $_POST['now_condition'];
  $deptarray = array();
  $gradearray = array();
  $deptarray_2 = array();
  $gradearray_2 = array();
function filter(){
    $ofile=fopen('./data.json',"r");
    global $deptarray;
    global $gradearray ;
    while(!feof($ofile)){
      $line = fgets($ofile);
      if($line == "") {
        continue;
    }
      $lineData = json_decode($line);
      
      array_push($deptarray,$lineData->dept);
      array_push($gradearray,$lineData->grade);
    }
    fclose($ofile);
    global $deptarray_2;
    global $gradearray_2;
    $deptarray_2 = array_unique($deptarray);
  $gradearray_2 = array_unique($gradearray);
}

filter();
if($selectData == "dept"){
  echo "<select id='nowselect'>";
  foreach($deptarray_2 as $i){
    echo "<option value = '$i'>$i</option>";
  }
  echo "</select>";
  //   foreach($deptarray_2 as $i){
  //   echo $i.",";
  // }

}else{
  echo "<select id='nowselect'>";
  foreach($gradearray_2 as $i){
    echo "<option value = '$i'>$i</option>";
  }
  echo "</select>";
  // foreach($gradearray_2 as $i){
  //   echo $i.",";
  // }
 }
?>