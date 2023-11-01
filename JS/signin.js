// const passwordInput = document.getElementById("login-password");
// const passwordToggle = document.getElementById("password-toggle");

// passwordToggle.addEventListener("click", () => {
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         passwordToggle.classList.remove("fa-eye");
//         passwordToggle.classList.add("fa-eye-slash");
//     } else {
//         passwordInput.type = "password";
//         passwordToggle.classList.remove("fa-eye-slash");
//         passwordToggle.classList.add("fa-eye");
//     }
// });

document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        // Replace this with your login logic
        // For this example, we'll simply show a success message
        document.getElementById("message").innerText = "Login successful!";
        document.getElementById("message").classList.add("success");
    } else {
        document.getElementById("message").innerText = "Please fill in all fields.";
        document.getElementById("message").classList.remove("success");
    }
});