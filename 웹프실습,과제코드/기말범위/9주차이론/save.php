 <?php
    $name = input_process($_POST['name']);
    $grade = input_process($_POST['grade']);
    session_start();
    $info = array($name, $grade);
    // echo session_id()."<br>";

    if (!isset($_SESSION['student'])) { // student로 세션 생성
        $_SESSION['student'] = array();
        // echo "if_ ".session_id()."<br>";
    }
    array_push($_SESSION['student'], $info);

    echo "세션에 저장되었습니다."."<br>";

    function input_process($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }   
    function pre_dump($array){
        echo "<pre>";
        echo var_dump($array);
        echo "</pre>";
    }
    pre_dump($_SESSION);
?>