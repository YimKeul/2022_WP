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
            생년월일
        </th>
        <th>
            키
        </th>
    </tr>

    <?php

    $start = $_POST["start"];
    $finish = $_POST["finish"];

    $myfile = fopen("data.txt", "r");

    $db = array();
    $i = 0;

    // if ($start == null){
    //     echo "HOEE";
    // }
    // echo $start;


    while (!feof($myfile)) {
        $Line = fgets($myfile);

        $LineData  =json_decode($Line);

        $T_name = $LineData->name;
        $T_bd = $LineData->birthdate;
        $T_w = $LineData->weight;


        if($start == null && $finish != null){
            if($T_bd <=$finish){
                echo "<tr>";
                echo "<td>".$T_name."</td>";
                echo "<td>".$T_bd."</td>";
                echo "<td>".$T_w."</td>";
                echo "</tr>";
            }
        }

        else if($start != null && $finish == null){
            if($T_bd >=$start){
                echo "<tr>";
                echo "<td>".$T_name."</td>";
                echo "<td>".$T_bd."</td>";
                echo "<td>".$T_w."</td>";
                echo "</tr>";
            }
        }
        else if($start != null && $finish != null){
            if($T_bd >=$start && $T_bd<=$finish){
                echo "<tr>";
                echo "<td>".$T_name."</td>";
                echo "<td>".$T_bd."</td>";
                echo "<td>".$T_w."</td>";
                echo "</tr>";
        }

    }
    }


    fclose($myfile);

    ?>
        </table>
</body>
</html>