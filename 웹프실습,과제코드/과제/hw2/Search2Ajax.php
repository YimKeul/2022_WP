<?php
    $Movie_id = $_POST['Movie_id'];
    $ofile = fopen("./data/screening.json", "r");
    echo"
    <table>
    <th>선택</th>
    <th>상영 날짜</th>
    <th>상영관</th>
    <th>예약수</th>";
    while(!feof($ofile)){
        
        $data = fgets($ofile);
        if($data == "") {
            continue;
        }
        $data = json_decode($data);
    
        // $len = strlen($Movie_id);
        if($data->movie_id == $Movie_id){
            echo "<tr>";
            echo "
            <td>
            <input type='radio' name ='reservation2' id='$data->id'/>
            </td>
            <td>$data->date</td>
            <td>$data->screening_id</td>
            <td>$data->reserve_seat</td></tr>";
        }
    }
    fclose($ofile);
    echo"</table>";
    echo "<br>";



?>
