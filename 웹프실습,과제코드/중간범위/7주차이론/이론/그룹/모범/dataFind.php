<!DOCTYPE>
<html>
  <head>
    <title> 2022 PHP 그룹 실습 1 </title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="dataFind.css">
</head>
<body>
<?php

 $infoArray;  //data.txt 데이타가 배열로 저장됨
$infoString;   //스트링이 단어 단위로 배열에 저장됨

//"data.txt"를 읽어 배열에 값 넣기

$ofile = fopen("data.txt", "r");

while (!feof($ofile)) {
    $aValue = fgets($ofile);
    $infoString = explode("|", $aValue);
    $infoArray[$infoString[0]] = $infoString[1];
}

fclose($ofile);

// 웹 페이지에서 값 읽어 오기

$fstr = $_POST['a1'];
$cstr = $_POST['b1'];

echo "<table>";
echo "<tr><th>이름</th><th>키</th></tr>";

foreach ($infoArray as $x => $x_value) {
    if ($cstr == "pname") {
        if (strpos($x, $fstr) !== false) {
            echo "<tr>";
            echo "<td>".$x."</td><td>".$x_value."</td>";
            echo "</tr>";
        }
    } else {
        if ($x_value >= $fstr) {
            echo "<tr>";
            echo "<td>".$x."</td><td>".$x_value."</td>";
            echo "</tr>";
        }
    }
}

echo "</table>";

?>
</body>
</html>