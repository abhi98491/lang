<?php
session_start();

// Database connection
$servername = "localhost:3306";
$db_username = "root";
$db_password = "";
$dbname = "backend";

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $mobile_number = $_POST['mobile_number'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password !== $confirmPassword) {
        $_SESSION['error'] = "Passwords do not match";
        header("Location: Buyer_Registration.html");
        exit();
    }

    // Check if the username or email already exists
    $sql = "SELECT id FROM buyers WHERE username=? OR email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $_SESSION['error'] = "Username or Email already exists";
        $stmt->close();
        header("Location: Buyer_Registration.html");
        exit();
    }

    $stmt->close();

    // Hashing the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Insert new user
    $sql = "INSERT INTO buyers (first_name, last_name, username, email, mobile_number, password) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $first_name, $last_name, $username, $email, $mobile_number, $hashedPassword);

    if ($stmt->execute()) {
        $_SESSION['success'] = "Registration successful!";
        header("Location: Buyer_Login.html");
    } else {
        $_SESSION['error'] = "Error: " . $stmt->error;
        header("Location: Buyer_Registration.html");
    }

    $stmt->close();
}

$conn->close();
?>
