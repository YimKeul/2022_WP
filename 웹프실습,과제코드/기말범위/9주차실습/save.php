 <?php
    $name = input_process($_POST['name']);
    $grade = input_process($_POST['grade']);

    session_start();
    $info = array($name, $grade);

    if (!isset($_SESSION['Test'])) {
        $_SESSION['Test'] = array();
    }
    array_push($_SESSION['Test'], $info);

    echo "세션에 저장되었습니다."."<br>";

    function input_process($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }   
?>