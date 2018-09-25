<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo '1';
    if (isset($_FILES['files'])) {
        echo '2';
        $errors = [];
        $path = 'photos/';
        $extensions = ['jpg', 'jpeg', 'png', 'gif'];

        $all_files = count($_FILES['files']['tmp_name']);

        for ($i = 0; $i < $all_files; $i++) {  
            $file_name = $_FILES['files']['name'][$i];
            $file_tmp = $_FILES['files']['tmp_name'][$i];
            $file_type = $_FILES['files']['type'][$i];
            $file_size = $_FILES['files']['size'][$i];
            $file_ext = strtolower(end(explode('.', $_FILES['files']['name'][$i])));

            $file = $path . $file_name;

            if (!in_array($file_ext, $extensions)) {
                echo '3a';
                $errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
            }

            if ($file_size > 2097152) {
                echo '3b';
                $errors[] = 'File size exceeds limit: ' . $file_name . ' ' . $file_type;
            }

            if (empty($errors)) {
                echo '3c';
                echo $file_tmp;
                echo $file;
                $x = move_uploaded_file($file_tmp, $file);
                echo $x == TRUE;
            }
        }

        if ($errors) print_r($errors);
    }
}