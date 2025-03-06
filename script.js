$(document).ready(function () {
    // Signup
    $("#signup-form").submit(function (event) {
        event.preventDefault();
        const username = $("#signup-username").val();
        const email = $("#signup-email").val();
        const password = $("#signup-password").val();

        $.ajax({
            url: "http://localhost:5000/signup",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username, email, password }),
            success: function (response) {
                alert(response.message);
                window.location.href = "login.html";
            },
            error: function (xhr) {
                alert(xhr.responseJSON.error);
            }
        });
    });

    // Login
    $("#login-form").submit(function (event) {
        event.preventDefault();
        const email = $("#login-email").val();
        const password = $("#login-password").val();

        $.ajax({
            url: "http://localhost:5000/login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ email, password }),
            success: function (response) {
                alert(response.message);
                localStorage.setItem("token", response.token);
                window.location.href = "home.html";
            },
            error: function (xhr) {
                alert(xhr.responseJSON.error);
            }
        });
    });

    // Logout
    $("#logout").click(function () {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
        window.location.href = "login.html";
    });
});
