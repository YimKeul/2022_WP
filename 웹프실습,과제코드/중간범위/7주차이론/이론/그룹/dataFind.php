<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./dataFind.css" />
</head>
<body>
<table >
    <tr>
        <th>
            이름
        </th>
        <th>
            키
        </th>
    </tr>

    <?php

    $input = $_GET["value"];
    $type = $_GET["profile"];

    $myfile = fopen("data.txt", "r") or die("Unable to open file!");
    //줄읽기
    while (!feof($myfile)) {
        $Line = fgets($myfile) . "<br>";
        $Split = explode("|", $Line);
        $name = $Split[0];
        $hei = (int)$Split[1];

        if ($type == "키") {
            if ($hei >= (int)$input) {
                echo "<tr>";
                echo "<td>".$name."</td>";
                echo "<td>".$hei."</td>";
                echo "</tr>";
            }
        } else {
            if (strpos($name, $input) !== false) {
                // 포함
                echo "<tr>";
                echo "<td>".$name."</td>";
                echo "<td>".$hei."</td>";
                echo "</tr>";
            }
        }
    }

    fclose($myfile);

    ?>
        </table>
</body>
</html>