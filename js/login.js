// Login validation and redirecter
function checkLogin(event){
    event.preventDefault();

    const domain = document.getElementById("domain").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (domain === "ModernTechHR" && username === "ModernTechAdmin" && password === "Solutions123"){
        window.location.href = "dashboard.html";
    } else {
        document.querySelector(".message").style.display = "block";
        console.log("Invalid credentials");
        alert ("Invalid username or password. Try again"); 
    }
}

function errorMessage(){
    document.querySelector(".message").style.display = "none";
}

document.getElementById('login-form').addEventListener('submit', checkLogin);
document.querySelector('.message').addEventListener('click', errorMessage);

document.querySelector(".dash-container").style.display = "block";

