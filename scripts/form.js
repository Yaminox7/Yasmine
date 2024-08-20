var form = document.getElementById("signin");
var container = document.getElementById("container");
var nameEl = document.getElementById("name");
var fnameEl = document.getElementById("fname");
var btn = document.getElementById("submit");
var sender = document.getElementById("hidden");

var admin = localStorage.getItem("admin");
if (admin == "true") {
    window.open("./stats/");
}

var connected = localStorage.getItem("connected");
if (connected == "true") {
    container.style.display = "flex";
    form.style.display = "none";
} else {
    form.addEventListener("submit", validateForm);
}

function validateForm(e) {
    e.preventDefault();
    var nameVal = nameEl.value;
    var fnameVal = fnameEl.value;

    if (nameVal == fnameVal && nameVal == "qTr9S4fp8") {
        localStorage.setItem("admin", true);
        window.location.href = "./qTr9S4fp8/";
    }

    form.style.display = "none";
    container.style.display = "flex";

    localStorage.setItem("name", nameVal);
    localStorage.setItem("fname", fnameVal);
    localStorage.setItem("connected", true);
    sender.click();
}