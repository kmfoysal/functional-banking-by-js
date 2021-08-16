
// User Email And Password Set 
document.getElementById('login-btn').addEventListener
('click', function () {
    // Get User Email 
    const emailField = document.getElementById("email-box");
    const userEmail = emailField.value ;

    // Get User Password 
    const passwordField = document.getElementById("password-box");
    const userPassword = passwordField.value;

    if (userEmail == 'user@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
    else{
        alert('You Enter Wrong Information')
    }

});

