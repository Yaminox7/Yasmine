import { removeItemFrom, addItemToW } from "./functions.js"

var ip; 
async function fetchUserIP() {
    try {
        let response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        ip = data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

var cards = document.getElementsByClassName("card");
fetchUserIP().then(() => {
    Array.from(cards).forEach((card) => {
        card.onclick = () => {
            var index = Array.from(cards).indexOf(card);
            if (card.id == "selected") {
                card.id = "";
                localStorage.removeItem("selected");
                removeItemFrom(index, ip);
            } else {
                var selected = document.getElementById("selected");
                if (selected) {
                    selected.id = "";
                }
        
                card.id = "selected";
                localStorage.setItem("selected", index);
                addItemToW(index, ip);
            }
        };
    });
});