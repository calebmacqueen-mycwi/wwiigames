<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
require('database.php');
require('employee.php');
require('employee_db.php');
require('comment.php');
require('comment_db.php');
$employee_db = new EmployeeDB();
$comment_db = new CommentDB();
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'list_comments'; // sets default action
    }
}  

if ($action == 'list_comments') { // shows a list of comments by employee
    $employee_id = filter_input(INPUT_GET, 'employee_id', FILTER_VALIDATE_INT);
    if ($employee_id == NULL || $employee_id == FALSE) {
        $employee_id = 1;
    }

    $employee_db = new EmployeeDB();
    $current_employee = $employee_db->getEmployee($employee_id);
    //echo "$current_employee --- $employee_id";
    $employees = $employee_db->getEmployees();
    $comments = $comment_db->getCommentsByEmployee($employee_id);

    include('comment_list.php');
} else if ($action == 'delete_comment') { //removes a comment
    $comment_id = filter_input(INPUT_POST, 'comment_id', FILTER_VALIDATE_INT);
    $employee_id = filter_input(INPUT_POST, 'employee_id', FILTER_VALIDATE_INT);
    //echo "$comment_id";
    $comment_db->deleteComment($comment_id);
    
    header("Location: .?employee_id=$employee_id");
}
?>