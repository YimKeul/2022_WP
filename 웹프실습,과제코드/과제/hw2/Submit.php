<?php
session_start();

$InData = "false";
$ofile = fopen("./data/person.json", "r");
while(!feof($ofile)) {
  $data = fgets($ofile);
  $data = json_decode($data);
  if($data == "") {
    continue;
}
 if($data->Name == $_POST['Name']){
    if($data->Password == $_POST['Password']){
        $InData = "true";
        $_SESSION['Name']=$_POST['Name'];
    }
   
    break;
 }
}
fclose($ofile);
echo $InData;

?>