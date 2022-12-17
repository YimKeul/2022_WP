<?php
    session_start();

    function pre_dump($array){
        echo "<pre>";
        echo var_dump($array);
        echo "</pre>";
    }


    $name  =$_POST['name'];
    $grade  =$_POST['grade'];
    echo $name." 의 학년을 ".$grade."학년으로 변경하였습니다."."<br>";

    $DBIndex = array($name,$grade);
    // if (!isset($_SESSION['student'])) {
    //     $_SESSION['student'] = array();
    // }

    echo "변경전 데이터";
    echo "<br>";
    pre_dump($_SESSION); //확인
    // array_push($_SESSION['Test'],$DBIndex);
    // for ($i = 0 ; $i<count($_SESSION['student']);$i++){
    //     if(strcmp($name, $_SESSION['student'][$i][0])==0){
    //         $_SESSION['student'][$i][1] = $grade;
    //     }
    // }
    $index = 0;
    foreach($_SESSION['student'] as $item){
        // if($name == $key){
        // $item[1] = $grade;
        // echo $item[0]." ".$item[1];
        // echo $val;
        // echo "우히히";
        if($name == $item[0]){
            $_SESSION['student'][$index][1] = $grade;
            //이건 필수인듯..
        }
        // echo $item[0];
        $index++;
        

        // }
    }

    echo "<br>";
    echo "변경후 데이터";
    echo "<br>";
    pre_dump($_SESSION); //확인




?>