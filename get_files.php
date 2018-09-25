<?php 

    $dir = 'photos/';
    $files = scandir($dir);
    echo '<pre>'; print_r($files); echo '</pre>';
    
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            echo '<pre>';
            while (($file = readdir($dh)) !== false) {
                if (! is_dir($file)){
                    echo "filename: $file : filetype: " . filetype($dir . $file) . "\n";
                }
            }
            echo '</pre>';
            closedir($dh);
        }
    }
    
?>