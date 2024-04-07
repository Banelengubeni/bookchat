document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Your login logic here (e.g., validation, authentication)
    // For demonstration purposes, let's just log the input values
    console.log("Username:", username);
    console.log("Password:", password);
    window.location.href = "dashboard.html";
  });
