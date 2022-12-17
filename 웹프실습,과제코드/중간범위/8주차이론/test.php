<html>
<head>
    <link rel="stylesheet" href="dataFind.css">
</head>
<body>

<table>
    <tr>
        <td id="name">이름</td>
        <td id="birthdate">생년월일</td>
        <td id="weight">몸무게</td>
    </tr>
    <?php

    $myfile = fopen("data.txt", "r") or die("Unable to open file!");
    $start_date = trim($_POST["start_date"]);
    $end_date = trim($_POST["end_date"]);

    while (!feof($myfile)) {
        $line = fgets($myfile);

        if ($line == null) {
            continue;
        }

        $user = json_decode($line);

        if ($start_date == NULL) {
            $start_date = 0;
        }

        if ($end_date == NULL) {
            $end_date = 9999999999999;
        }

        if ($user->birthdate >= $start_date && $user->birthdate <= $end_date) {
            echo "<tr>
                        <td>$user->name</td>
                        <td>$user->birthdate</td>
                        <td>$user->weight</td>
                    </tr>";
        }
    }
    fclose($myfile);
    ?>
</table>
</body>
</html>