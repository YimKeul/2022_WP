<?php
    $Title = $_POST['Title']; // 영화제목
    $Genre = $_POST['Genre']; // 장르
    $Director = $_POST['Director']; //감독
    $Actor = $_REQUEST['Actor']; //출연자
    $Actors = array(); //출연자 배열
    $AddInfoData = $_REQUEST['AddInfoData'];//영화 상영 정보추가

    $upload_movie_screen_dir = './data'; //data 폴더 없으면 만들기
    if(!is_dir('data')){
        mkdir($upload_movie_screen_dir);
    }
  

  //id생성기
  function getline($link){
    $arrIndex = 0;
    $ofile = fopen($link, "r");
    while(!feof($ofile)) {
      $str = fgets($ofile);
      $obj = json_decode($str);
      $arrIndex++;
    }
    fclose($ofile);
    return (int)$arrIndex;
  }

  //출연자 배열 만드는중
  for($i = 0; $i<count($Actor);$i++){
    array_push($Actors,$Actor[$i]);
  }


  function getMovieID(){
    $arrIndex = 0;
    $ofile=fopen('./data/movie.json',"r");
    while(!feof($ofile)){
      $line = fgets($ofile);
      $lineData = json_decode($line);
      $arrIndex++;
    }
    fclose($ofile);
    return 'm'.$arrIndex-1;
  }

  function getScreenID(){
    $arrIndex = 0;
    $ofile=fopen('./data/screening.json',"r");
    while(!feof($ofile)){
      $line = fgets($ofile);
      $lineData = json_decode($line);
      $arrIndex++;
    }
    fclose($ofile);
    return 'r'.$arrIndex-1;
  }

  //////파일 이미지 저장
  $uploads_poster = './uploads';
  if(!is_dir('uploads')){
    mkdir($uploads_poster);
  }
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  //파일 이름 저장
  $UploadFile =  $_FILES["fileToUpload"]["name"];
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
  // Check if image file is a actual image or fake image
  if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
      echo "File is an image - " . $check["mime"] . ".";
      $uploadOk = 1;
    } else {
      echo "File is not an image.";
      $uploadOk = 0;
    }
  }

  // Allow certain file formats
  if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"&& $imageFileType != "gif" ) {
    $uploadOk = 0;
  }

  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
    // echo "Sorry, your file was not uploaded.";
  // if everything is ok, try to upload file
  echo "선택한 파일을 업로드 할 수 없습니다.";
  } else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      // echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";

      //업로드 성공시
          //movie.json만들기
    $SaveMovie = fopen("./data/movie.json", "a+") ;
    $MovieID = getMovieID();
    $SaveMovie_DB = array("id"=>$MovieID, "movie_name"=>$Title, "genre"=>$Genre,"director"=>$Director,"actors"=>$Actors,"file_name"=>$UploadFile);
    fwrite($SaveMovie, json_encode($SaveMovie_DB,JSON_UNESCAPED_UNICODE));
    fwrite($SaveMovie, "\n");
    fclose($SaveMovie);
    


    //screening.json만들기
    $SaveScreen = fopen("./data/screening.json", "a+") ;
    for($i = 0; $i<count($AddInfoData);$i++){
      $ScreenID = getScreenID();
      $temp = getline("./data/movie.json")-2;
      $MovieID = 'm'.$temp;
      $Split = explode(",", $AddInfoData[$i]);
      $Date = $Split[0];
      $Place = $Split[1];
      $SaveScreen_DB = array("id"=>$ScreenID, "date"=>$Date, "movie_id"=>$MovieID,"screening_id"=>$Place,"reserve_seat"=>0);
      fwrite($SaveScreen, json_encode($SaveScreen_DB,JSON_UNESCAPED_UNICODE));
      fwrite($SaveScreen, "\n");
    }
    fclose($SaveScreen);
    echo "저장되었습니다.";
    } else {
      // echo "Sorry, there was an error uploading your file.";
    }
  }

    








?>

