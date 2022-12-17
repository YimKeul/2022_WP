<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


$name = test_input($_POST['a1']);
$level = test_input($_POST['c1']);

if(isset($_SESSION["info"])) {

	$co = count($_SESSION["info"]);
	$_SESSION["info"][$co] = array($name, $level);

} else {

	$_SESSION["info"][0] = array($name, $level);
}

echo "세션에 저장되었습니다.";
var_dump($_SESSION);
?>

</body>
</html>