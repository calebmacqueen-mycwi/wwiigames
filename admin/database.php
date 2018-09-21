<!-- Caleb MacQueen File Added 9/14/2018 -->
<?php
class Database {    // can be called to open access to the database
    private static $dsn = 'mysql:host=localhost;dbname=wwiigames';
    private static $username = 'root';
    private static $password = 'Pa$$w0rd';
    private static $db;

    private function __construct() {}

    public static function getDB () {
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$dsn,
                                     self::$username,
                                     self::$password);
            } catch (PDOException $e) {
                $error = $e->getMessage();
                include('error.php'); // passes the error message to a page where it is displayed
                exit();
            }
        }
        return self::$db;
    }
}
?>