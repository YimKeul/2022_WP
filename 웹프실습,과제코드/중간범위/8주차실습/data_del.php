    <?php

    $start = $_POST["start"];
    $finish = $_POST["finish"];

    $myfile = fopen("data.txt", "r");

    $db = array();
    $i = 0;

    while (!feof($myfile)) {
        $Line = fgets($myfile);
        $LineData  =json_decode($Line);
        $T_name = $LineData->name;
        $T_bd = $LineData->birthdate;
        $T_w = $LineData->weight;
        $input_data = array("name" =>$T_name, "birthdate"=>$T_bd,"weight"=>$T_w);
               
        $data =  json_encode($input_data,JSON_UNESCAPED_UNICODE);
        // echo $data;
        if($start == null && $finish != null){
            if($T_bd <=$finish){
                echo $T_name."를 삭제했습니다."."<br>";
            }else{
                $db[$i] = $data;
                $i++;
            }

        }

        else if($start != null && $finish == null){
            if($T_bd >=$start){
                echo $T_name."를 삭제했습니다."."<br>";
            }else{
                $db[$i] = $data;
                $i++;
            }
        }
        else if($start != null && $finish != null){
            if($T_bd >=$start && $T_bd<=$finish){
                echo $T_name."를 삭제했습니다."."<br>";
        }else{
            $db[$i] = $data;
            $i++;
        }

    }
    }


    fclose($myfile);
    unlink("data.txt");
    $myfile=fopen("data.txt", "a+");
    for ($j = 0; $j < count($db);$j++) {
        if ($j ==0) {
            fwrite($myfile, $db[$j]);
        } else {
            fwrite($myfile, "\n");
            fwrite($myfile, $db[$j]);
        }
    }
    fclose($myfile);

    ?>