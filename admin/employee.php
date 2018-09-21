<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
class Employee { // gets relevant information from the planners table in the database
    private $employeeID;
    private $fName;

    public function __construct($employeeID, $fName) {
        $this->employeeID = $employeeID;
        $this->fName = $fName;
    }

    public function getID() {
        return $this->employeeID;
    }

    public function setID($value) {
        $this->employeeID = $value;
    }

    public function getName() {
        return $this->fName;
    }

    public function setName($value) {
        $this->fName = $value;
    }
}
?>