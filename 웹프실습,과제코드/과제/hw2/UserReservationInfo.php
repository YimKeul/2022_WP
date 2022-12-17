<?php
    $User = $_POST['User'];
    // echo $User;
    $ofile = fopen("./data/$User.json", "a+");
    fclose($ofile);
    $ofile = fopen("./data/$User.json", "r");
echo"
<table>
<th>체크</th>
<th>예약 번호</th>
<th>영화 제목</th>
<th>상영 날짜</th>
<th>상영 장소</th>
<th>예매 수</th>
";
while(!feof($ofile)){
    $data = fgets($ofile);
    if($data == "") {
        continue;
    }
    $data = json_decode($data);
    $date = CheckDate_Place($data->s_id)[0];
    $place = CheckDate_Place($data->s_id)[1];
    $movie = CheckMovieName($data->movie_id)[0];
echo "<tr>

<td><input type='checkbox' name='checking[]'></td>
<td>$data->id</td>
<td>$movie</td>
<td>$date</td>
<td>$place</td>
<td>$data->reserve_num</td>
</tr>";
}
fclose($ofile);
echo"</table>";
echo "<br>";

function CheckDate_Place($rid){
    $ofile = fopen("./data/screening.json", "r");
    $date_place = array();
    while(!feof($ofile)){
        $data = fgets($ofile);
        if($data == "") {
            continue;
        }
        $data = json_decode($data);
        if($rid ==$data->id){
            array_push($date_place,$data->date,$data->screening_id);
            return $date_place;
        }

    }
    fclose($ofile);

}

function CheckMovieName($mid){
    $ofile = fopen("./data/movie.json", "r");
    $moviename = array();
    while(!feof($ofile)){
        $data = fgets($ofile);
        if($data == "") {
            continue;
        }
        $data = json_decode($data);
        if($mid == $data->id){
            array_push($moviename,$data->movie_name);
            return $moviename;
        }

    }
    fclose($ofile);
}

?>