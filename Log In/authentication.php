<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "futsal";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    // Server-side validation
    if (empty($Email) || empty($Password)) {
        echo "Both Email and Password are required.";
        $conn->close();
        exit;
    }

    // Check user credentials in the database
    $checkUserQuery = "SELECT * FROM register WHERE Email = ? AND Password = ?";
    $stmt = $conn->prepare($checkUserQuery);
    $stmt->bind_param("ss", $Email, $Password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        echo "Login successful!";
        // Redirect to the user's profile page or another secure page
        header("Location: ../HPA_Log_In/index.php");
        exit();
    } else {
        echo "Invalid Email or Password.";
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
}
