import { removeItemFrom, addItemTo, addObjectTo } from "./functions.js";

// var ip; 
// async function fetchUserIP() {
//     try {
//         let response = await fetch('https://api.ipify.org?format=json');
//         let data = await response.json();
//         ip = data.ip;
//     } catch (error) {
//         console.error('Error fetching IP address:', error);
//     }
// }
var cards = document.getElementsByClassName("card");
var sender = document.getElementById("hidden");
if (localStorage.getItem("connected") == "true") {
    setter();
} else {
    sender.addEventListener("click", setter);
}

function setter() {
    // fetchUserIP().then(() => {
    Array.from(cards).forEach((card) => {
        card.onclick = () => {
            var id = localStorage.getItem("name") + "_" + localStorage.getItem("fname");
            var date = Date.now();
            var index = Array.from(cards).indexOf(card);
            var input = card.getElementsByTagName("input")[0];
            var log = {
                "choice": index,
                "id": id,
                "at": date,
                "type": "add"
            };
            if (card.id == "selected") {
                log.type = "remove";
                card.id = "";
                localStorage.removeItem("selected");
                removeItemFrom("opinions/", index, id);
                input.checked = false; 
            } else {
                var selected = document.getElementById("selected");
                if (selected) {
                    log.type = "move";
                    selected.id = "";
                }
                
                card.id = "selected";
                input.checked = true; 
                localStorage.setItem("selected", index);
                addItemTo("opinions/", index, id);
            }
            addObjectTo("logs/", log);
        };
    });
    // });}
}