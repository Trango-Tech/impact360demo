<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "Developer@trangotech.com"; // Change to your email
    $subject = "New Form Submission";

    // Fetch form data
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';

    // Create email body
    $message = "First Name: $firstName\n";
    $message .= "Last Name: $lastName\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";

    // Create email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<p style='color:green;'>Thank you! Your message has been sent.</p>";
    } else {
        echo "<p style='color:red;'>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p style='color:red;'>Invalid Request</p>";
}
?>