<!DOCTYPE html>
<html>
    <title>week9 실습</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="search.css">
<head>
</head>
<body>
    
<?php

    $name = input_process($_POST['name']);
    $grade = input_process($_POST['grade']);

    session_start();
    // var_dump($_SESSION); // php 데이터 확인 코드
    function pre_dump($array){
        echo "<pre>";
        echo var_dump($array);
        echo "</pre>";
    }
    pre_dump($_SESSION);
    //php 확인 코드


    $result = array(); //배열 선언
    //name, grade는 입력값
    //session에 있는 item은 저장된값
    //저장된 값이 더 김
    //그래서 strpos를 할때
    //str(a,b) 는 a에 b가 있는지 확인
    //긴 item값 넣고 , b 부분검색용으로 탐색
    foreach ($_SESSION['student'] as $item) {
        if (strcmp($grade, $item[1]) == 0) { // 학년 같은경우
            if (empty($name)) { //  비어있다면?
                array_push($result, $item); //result에 item을 넣기
            }
            else if (strpos($item[0], $name) !== false) {
                array_push($result, $item);
            }
        }
    }

    echo "<table>";
    echo "<tr><th>학생 이름</th><th>학년</th></tr>";

    foreach($result as $item) {
        echo "<tr>";             
        echo "<td>".$item[0]."</td><td>".$item[1]."</td>";
        echo "</tr>";
    };

    echo "</table>";

    function input_process($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }   
?> 
</body>
</html>


