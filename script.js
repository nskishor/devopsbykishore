document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();
});

// Signup Function (Stores user data in Local Storage)
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("isLoggedIn", "true");
        alert("Signup successful!");
        checkLoginStatus();
    } else {
        alert("Please enter valid email and password.");
    }
}

// Login Function (Validates user from Local Storage)
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        checkLoginStatus();
    } else {
        alert("Invalid email or password.");
    }
}

// Logout Function (Removes user session)
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    checkLoginStatus();
}

// Check Login Status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userStatus = document.getElementById("user-status");

    if (isLoggedIn) {
        userStatus.innerHTML = "✅ Logged in as: " + localStorage.getItem("userEmail");
    } else {
        userStatus.innerHTML = "❌ Not logged in.";
    }
}
