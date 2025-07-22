
function checkLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user === "tanyaa777_" && pass === "230707") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("login-msg").innerText = "Incorrect username or password.";
    }
}
