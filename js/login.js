const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        const response = await fetch("users.json");

        if (!response.ok) {
            throw new Error("Unable to load users.");
        }

        const users = await response.json();

        const validUser = users.find(user =>
            user.username === username &&
            user.password === password
        );

        if (validUser) {

            localStorage.setItem("loggedInUser", username);

            window.location.href = "dashboard.html";

        } else {

            message.textContent = "Invalid Username or Password";

        }

    } catch (error) {

        console.error(error);

        message.textContent = "Something went wrong.";

    }

});