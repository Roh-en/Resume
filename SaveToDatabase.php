<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Connect to your database (replace these parameters with your actual database details)
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_name = 'prsdb';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the name from the POST request
$user_firstname = $_POST['userFname'];
$user_lastname = $_POST['userLname'];
$user_jobdesignation = $_POST['userJob'];
$user_phonenumber = $_POST['userPhone'];
$user_email = $_POST['userEmail'];
$user_linkedin = $_POST['userLinkedin'];
$user_location = $_POST['userLocation'];
$user_skills = $_POST['userSkill'];
$user_lang = $_POST['userLang'];
$user_achievements = $_POST['userAchieve'];
$user_interests = $_POST['userInterest'];
$user_degrees = $_POST['userDegree'];
$user_workexperiences = $_POST['userWork'];
$user_projects = $_POST['userProject'];

// Insert the name into the database
$sql = "INSERT INTO user_details (
    user_firstname, user_lastname, user_jobdesignation, user_phonenumber, 
    user_email, user_linkedin, user_location, user_skills, user_lang, user_achievements, 
    user_interests, user_degrees, user_workexperiences, user_projects ) 
    VALUES (
        '$user_firstname', '$user_lastname', '$user_jobdesignation', '$user_phonenumber', 
        '$user_email', '$user_linkedin', '$user_location', '$user_skills', '$user_lang', '$user_achievements', 
        '$user_interests', '$user_degrees', '$user_workexperiences', '$user_projects'
    )";

if (mysqli_query($conn, $sql)) {
    echo "Record saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>