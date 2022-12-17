<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <?php
        $myfile = fopen("data.txt", "a") or die("Unable to open file!");
    $name =$_GET["name"];
    $hei = $_GET["height"];
    //     $enter = "\n";
    //     fwrite($myfile, $name);
    //     fwrite($myfile,"|");
    //     fwrite($myfile, $hei);
    //     fwrite($myfile,
    //      $enter);
    //     fclose($myfile);

    if (filesize("data.txt") == 0) {
        fwrite($myfile, $name."|".$hei);
        echo "저장되었습니다.";
        fclose($myfile);
    } else {
        fwrite($myfile, "\n");
        fwrite($myfile, $name."|".$hei);
        echo "저장되었습니다.";
        fclose($myfile);
    }


    ?> 
    

  </body>
</html>