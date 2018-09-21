<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
class EmployeeDB { // conatins functions for interacting with employee objects
    public function getEmployees() { // gets all employees who have the responsability of dealing with visitor comments
        $db = Database::getDB();
        $query = 'SELECT * FROM planners WHERE employeeID < 5
                  ORDER BY employeeID';
        $statement = $db->prepare($query);
        $statement->execute();
        
        $employees = array();
        foreach ($statement as $row) {
            $employee = new Employee($row['employeeID'],$row['fname']);
            $employees[] = $employee;
        }
        return $employees;
    }

    public function getEmployee($employee_id) { // gets a specific employee, using the primary key
        $db = Database::getDB();
        $query = 'SELECT * FROM planners
                  WHERE employeeID = :employee_id';    
        $statement = $db->prepare($query);
        $statement->bindValue(':employee_id', $employee_id);
        $statement->execute();    
        $row = $statement->fetch();
        $statement->closeCursor();    
        $employee = new Employee($row['employeeID'],$row['fname']);
        //echo $employee->getID();
        return $employee;
    }
}
?>