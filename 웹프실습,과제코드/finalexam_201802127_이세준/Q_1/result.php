<?php
    $checkValue = $_POST['checkValue'];
    $checkType = $_POST['checkType'];
    $checks = $_REQUEST['checkArray'];
    $sum = 0;
    // echo count($checks);
    // echo "$checkValue , $checkType";
    // foreach($checks as $II){
    //     echo $II."<br>";
    // }

    echo "<table>";
    echo "<th>학과</th><th>이름</th><th>학년</th>";
    foreach($checks as $II){
        if($II == "quiz"){
            $II = "퀴즈";
        }else if($II == "mid"){
            $II = "중간 점수";
        }else{
            $II = "기말 점수";
        }
        echo "<th>$II</th>";
    }
    echo "<th>총합</th>";
    
    $ofile=fopen('./data.json',"r");
    while(!feof($ofile)){
      $line = fgets($ofile);
      if($line == "") {
        continue;
    }
      $lineData = json_decode($line);
      if($checkType == "dept"){
        if($checkValue == $lineData->dept){
            echo 
            "
            <tr>
            <td>
            $checkValue
            </td>
            <td>
            $lineData->name
            </td>

            <td>
            $lineData->grade
            </td>";

            foreach($checks as $II){
                $temp = 0;
                if($II == "quiz"){
                    foreach($lineData->quiz_score as $t){
                        $temp += $t;
                    }
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }else if($II == "mid"){
                    $temp +=  $lineData->mid_exam;
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }else{
                    $temp +=  $lineData->final_exam;
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }
            }
            
            echo"<td>
            $sum
            </td>";
            $sum = 0;
            
    echo "</tr>";
        }
      }else{
        if($checkValue == $lineData->grade){
            echo 
            "
            <tr>
            <td>
            $lineData->dept
            </td>
            <td>
            $lineData->name
            </td>

            <td>
            $checkValue
            </td>";

            foreach($checks as $II){
                $temp = 0;
                if($II == "quiz"){
                    foreach($lineData->quiz_score as $t){
                        $temp += $t;
                    }
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }else if($II == "mid"){
                    $temp +=  $lineData->mid_exam;
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }else{
                    $temp +=  $lineData->final_exam;
                    $sum+=$temp;
                    echo "<td>$temp</td>";
                    $temp =0;
                }
            }
            
            echo"<td>
            $sum
            </td>";
            $sum = 0;
            
    echo "</tr>";
        }
      }
      
    }
    fclose($ofile);

    echo"</table>";



?>