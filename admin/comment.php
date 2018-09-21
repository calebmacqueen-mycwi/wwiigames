<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
class Comment { // Each object contains the information pertaining to a single comment
    private $employeeRefNum, $commentID, $emailAddress, $commentTxt;

    public function __construct($employeeRefNum, $commentID, $emailAddress, $commentTxt) {
        $this->employeeRefNum = $employeeRefNum;
        $this->commentID = $commentID;
        $this->emailAddress = $emailAddress;
        $this->commentTxt = $commentTxt;
    }

    public function getRefNum() {
        return $this->employeeRefNum;
    }

    public function setRefNum($value) {
        $this->employeeRefNum = $value;
    }

    public function getID() {
        return $this->commentID;
    }

    public function setID($value) {
        $this->commentID = $value;
        //print $value;
    }

    public function getEmail() {
        return $this->emailAddress;
    }

    public function setEmail($value) {
        $this->emailAddress = $value;
    }

    public function getText() {
        return $this->commentTxt;
    }

    public function setText($value) {
        $this->commentTxt = $value;
    }
}
?>