<?php
// Start the session
session_start();
?>
<!DOCTYPE>
<html>
  <head>
    <title> 2022 PHP 그룹 실습 3 </title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="dataFind.css">
</head>
<body>

<?php
var_dump($_SESSION);
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$fstr = test_input($_POST['aa1']);
$cstr = $_POST['cc1'];

//var_dump($_SESSION["info"]);


echo "<table>";
echo "<tr><th>학생 이름</th><th>학년</th></tr>";


if(isset($_SESSION["info"])) {

  if ($fstr !== "") {

    for ($i =0 ; $i < count($_SESSION["info"]); $i++) {

      if((strpos($_SESSION["info"][$i][0], $fstr)) !== false) {

            if($_SESSION["info"][$i][1] == $cstr) {  

              echo "<tr><td>";
              echo $_SESSION["info"][$i][0]."</td><td>";
              echo $_SESSION["info"][$i][1]."</td></tr>";
            }  // if
      }  // if

    }  // for

  } else {

        for ($i =0 ; $i < count($_SESSION["info"]); $i++) {
     
            if($_SESSION["info"][$i][1] == $cstr) {

               echo "<tr><td>";
               echo $_SESSION["info"][$i][0]."</td><td>";
               echo $_SESSION["info"][$i][1]."</td></tr>";
             }

         }
    }
}
/*
session_unset();


session_destroy();
*/

?>

</body>
</html>