<?php
    $upload_movie_screen_dir = './data';
    if(!is_dir('data')){
        mkdir($upload_movie_screen_dir);
    }

    $movie_id = $_POST['movie_id'];
    $s_id = $_POST['s_id'];
    $reserve_num = (int)$_POST['reserve_num'];   

    function getUserID(){
        $arrIndex = 0;
        $ofile=fopen("./data/".$_POST['nowUser'].".json","r");
        while(!feof($ofile)){
          $line = fgets($ofile);
          $lineData = json_decode($line);
          $arrIndex++;
        }
        fclose($ofile);
        return 'u'.$arrIndex-1;
       
      }

    $SaveUser = fopen("./data/".$_POST['nowUser'].".json","a+");
    $UserID = getUserID();
    $SaveUser_DB = array("id"=>$UserID, "movie_id"=>$movie_id, "s_id"=>$s_id,"reserve_num"=>$reserve_num);
    fwrite($SaveUser, json_encode($SaveUser_DB,JSON_UNESCAPED_UNICODE));
    fwrite($SaveUser, "\n");
    fclose($SaveUser);




//screening.json수정
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
        if($data->id ==  $s_id ){
            $tempnum = $data->reserve_seat +$reserve_num;
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
?>