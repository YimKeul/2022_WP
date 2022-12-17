<?php
$value = validate_input($_POST["value"]);
$key = validate_input($_POST["key"]);

echo json_encode(readData($value, $key));

function readData($value, $key) {
    $file = fopen("./data.json", "r");
    $data = array();
    while (!feof($file)) {
        $line = fgets($file);
        $obj = json_decode($line);

        $nowSearching = "";
        if ($key === "dept") {
            $nowSearching = $obj->dept;
        } else {
            $nowSearching = $obj->name;
        }

        $doesContain = True;
        for ($i = 0; $i < strlen($value); $i++) {
            if (strtolower(substr($value, $i, 1)) !== strtolower(substr($nowSearching, $i, 1))) {
                $doesContain = False;
            }
        }
        if (!$doesContain) continue;

        array_push($data, $obj);
    }

    return $data;
}

function validate_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    return htmlspecialchars($input);
}
?>