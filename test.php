<?php
//test file for password encryption
$new_password = "papon";
$str = '$2y$10$QAQ3l8SvB0W24EKdKIn2Ge9Ife4ZsoaSimS7Tfl9nDtsEyaD995qe';
if (password_verify($new_password, $str)) {
    echo "Yes";
} else {
    echo "No";
}
