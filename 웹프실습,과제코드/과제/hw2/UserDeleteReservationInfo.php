<?php
   $upload_movie_screen_dir = './data';
   if(!is_dir('data')){
       mkdir($upload_movie_screen_dir);
   }

   $UserID = $_POST['UserID'];
   $nowUser = $_POST['nowUser'];

//해당 유저 json삭제하기
    $temp_db = array();
    $i = 0;
    $ofile=fopen("./data/$nowUser.json","r");
    while(!feof($ofile)){
        $data = fgets($ofile);
        if($data == "") {
            continue;
        }
        $data = json_decode($data);
        $input_data = array("id"=>$data->id, "movie_id"=>$data->movie_id, "s_id"=>$data->s_id,"reserve_num"=>$data->reserve_num);
        $line = json_encode($input_data,JSON_UNESCAPED_UNICODE);
        if($data->id != $UserID){
            $temp_db[$i] = $line;
            $i+=1;
        }else{
            EditScreenDB($data->s_id,$data->reserve_num);
        }
    }
    fclose($ofile);
    unlink("./data/$nowUser.json");
    $ofile=fopen("./data/$nowUser.json","a+");
    for ($j = 0; $j < count($temp_db);$j++) {
        fwrite($ofile, $temp_db[$j]);
        fwrite($ofile, "\n");
    }
    fclose($ofile);

    function EditScreenDB ($userid , $reserve_num){
        echo $userid." ".$reserve_num;
        $temp_db = array();
        $i = 0;
        $ofile=fopen("./data/screening.json","r");
        while(!feof($ofile)){
            $data = fgets($ofile);
            if($data == "") {
                continue;
            }
            $data = json_decode($data);
            $input_data = array("id"=>$data->id, "date"=>$data->date, "movie_id"=>$data->movie_id,"screening_id"=>$data->screening_id,"reserve_seat"=>$data->reserve_seat);
            $line = json_encode($input_data,JSON_UNESCAPED_UNICODE);
            if($data->id ==  $userid ){
                $tempnum = $data->reserve_seat - $reserve_num;
                $temp = array("id"=>$data->id, "date"=>$data->date, "movie_id"=>$data->movie_id,"screening_id"=>$data->screening_id,"reserve_seat"=>$tempnum);
                $temp_db[$i] = json_encode($temp,JSON_UNESCAPED_UNICODE);
            }else{
                $temp_db[$i] = $line;
            }
            $i+=1;
        }
        fclose($ofile);
        unlink("./data/screening.json");
        $myfile=fopen("./data/screening.json", "a+");
    
        for ($j = 0; $j < count($temp_db);$j++) {
            fwrite($myfile, $temp_db[$j]);
            fwrite($myfile, "\n");
        }
        fclose($myfile);
    }


?>