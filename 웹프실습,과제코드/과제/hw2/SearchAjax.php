<!-- 영화 검색시 나오는 표 php -->
<?php
    $name = $_POST['name'];
    $ofile = fopen("./data/movie.json", "r");
echo"
<table>
<th>선택</th>
<th>영화 제목</th>
<th>장르</th>
<th>감독</th>
<th>배우</th>
<th>화일</th>";

while(!feof($ofile)){
        
    $data = fgets($ofile);
    if($data == "") {
        continue;
    }
    $data = json_decode($data);

    if(
        strpos($data->movie_name,$name) !==false ||
        strpos($data->director,$name) !==false ||
        strpos(implode(",",$data->actors),$name) !==false

    ){
        echo "<tr>";
        echo "
        <td>
        <input type='radio' name ='reservation' id='$data->id'/>
        </td>
        "
        ."<td>".$data->movie_name."</td>"
        ."<td>".$data->genre."</td>"
        ."<td>".$data->director."</td>"
        ."<td>".implode(",",$data->actors)."</td>"
        ."<td>"."<a href='./uploads/$data->file_name' target='_blank'>미리보기</a>"."</td></tr>";
    }

}
fclose($ofile);
echo "</table>";
echo "<br>";
echo "<br>";
?>