<?php
    session_start();
    function pre_dump($array){
        echo "<pre>";
        echo var_dump($array);
        echo "</pre>";
    }

    $name  =$_POST['name'];
    $grade  =$_POST['grade'];



    $DBIndex = array($name,$grade);
    if (!isset($_SESSION['student'])) {
        $_SESSION['student'] = array();
    }

    echo "변경전 데이터";
    echo "<br>";
    pre_dump($_SESSION); //확인
    echo "<br>";

    $result = array();
    if(empty($name) ){
        for ($i = 0 ; $i<count($_SESSION['student']);$i++){
            if( $grade ==  $_SESSION['student'][$i][1]){
                echo $_SESSION['student'][$i][0]."을 삭제했습니다."."<br>";
            }else{
                array_push($result,array($_SESSION['student'][$i][0],$_SESSION['student'][$i][1]));
            }
        }        

    }else{
        for ($i = 0 ; $i<count($_SESSION['student']);$i++){
            if( ($grade ==  $_SESSION['student'][$i][1]) && (strpos($_SESSION['student'][$i][0],$name))!== false){
                echo $_SESSION['student'][$i][0]."을 삭제했습니다."."<br>";
                
            }else{
                array_push($result,array($_SESSION['student'][$i][0],$_SESSION['student'][$i][1]));
            }
        }   
    }
    $_SESSION['student'] = $result;


    echo "<br>";
    echo "변경후 데이터";
    echo "<br>";
    pre_dump($_SESSION); //확인




?>