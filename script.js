// Function to generate a random password
function generatePassword() {
    let length = Math.floor(Math.random() * 3) + 6; // Random length between 6 to 8
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; ++i) {
        let randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        password += randomChar;
    }

    // Ensure there's at least one uppercase letter and one special character
    let uppercaseRegex = /[A-Z]/;
    let specialCharRegex = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/;

    if (!uppercaseRegex.test(password)) {
        // Replace a random lowercase letter with a random uppercase letter
        let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        let randomLowercaseChar = lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        let randomUppercaseChar = randomLowercaseChar.toUpperCase();
        let randomIndex = Math.floor(Math.random() * password.length);
        password = password.substr(0, randomIndex) + randomUppercaseChar + password.substr(randomIndex + 1);
    }

    if (!specialCharRegex.test(password)) {
        // Replace a random alphanumeric character with a random special character
        let alphanumericChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomAlphanumericChar = alphanumericChars.charAt(Math.floor(Math.random() * alphanumericChars.length));
        let randomSpecialChar = charset.charAt(Math.floor(Math.random() * (charset.length - 62)) + 62); // Special characters start from index 62 in 'charset'
        let randomIndex = Math.floor(Math.random() * password.length);
        password = password.substr(0, randomIndex) + randomSpecialChar + password.substr(randomIndex + 1);
    }

    return password;
}

// Event listener for the button click
document.getElementById("generate-btn").addEventListener("click", function() {
    let generatedPassword = generatePassword();
    document.getElementById("password-display").innerText = generatedPassword;
});


