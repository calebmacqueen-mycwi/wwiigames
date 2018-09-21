<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
class CommentDB { // conatins functions for interacting with visitor comments from the admin page
    public function getCommentsByEmployee($employee_id) { // gets a list of all comments that correspond to a particular employee
        $db = Database::getDB();
        $employee_db = new EmployeeDB();
        $employee = $employee_db->getEmployee($employee_id);
        //echo $employee_id;
        $query = 'SELECT * FROM recordcomments
                  WHERE recordcomments.employeeRefNum = :employee_id
                  ORDER BY commentID';
        $statement = $db->prepare($query);
        $statement->bindValue(":employee_id", $employee_id);
        $statement->execute();
        $rows = $statement->fetchAll();
        $statement->closeCursor();
        //echo $rows['employee_id'];
        foreach ($rows as $row) {
            $comment = new Comment($row['employeeRefNum'],$row['commentID'],$row['emailAddress'],$row['commentTxt']);
            //echo "$comment---";
            $comments[] = $comment;
        }
        //echo "$comments[1]---";
        return $comments;
    }
//
//    public function getProduct($product_id) {
//        $db = Database::getDB();
//        $category_db = new CategoryDB();
//        $query = 'SELECT * FROM products
//                  WHERE productID = :product_id';
//        $statement = $db->prepare($query);
//        $statement->bindValue(":product_id", $product_id);
//        $statement->execute();
//        $row = $statement->fetch();
//        $statement->closeCursor();
//    
//        $category = $category_db->getCategory($row['categoryID']);
//        $product = new Product();
//            $product->setCode($row['productCode']);
//            $product->setName($row['productName']);
//            $product->setPrice($row['listPrice']);
//            $product->setID($row['productID']);
//        return $product;
//    }

    public function deleteComment($comment_id) { //Deletes items from the recordcomments database. Requires the comment_id, which is the primary key
        //echo 'in delete function';
        $db = Database::getDB();
        $query = 'DELETE FROM recordcomments
                  WHERE commentID = :comment_id';
        $statement = $db->prepare($query);
        $statement->bindValue(':comment_id', $comment_id);
        $statement->execute();
        $statement->closeCursor();
        //include 'list_comments.php';
    }

//    public function addProduct($product) {
//        $db = Database::getDB();
////        echo $product->getID();
//        $varCheck = $product->getID();
//            echo "The id value of product is $varCheck";
//        $category_id = $product->getCategory();
//        $code = $product->getCode();
//        $name = $product->getName();
//        $price = $product->getPrice();
//
//        $query = 'INSERT INTO products
//                     (categoryID, productCode, productName, listPrice)
//                  VALUES
//                     (:category_id, :code, :name, :price)';
//        $statement = $db->prepare($query);
//        $statement->bindValue(':category_id', $category_id);
//        $statement->bindValue(':code', $code);
//        $statement->bindValue(':name', $name);
//        $statement->bindValue(':price', $price);
//        $statement->execute();
//        $statement->closeCursor();
//    }
}
?>