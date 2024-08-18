var cards = document.getElementById("cards");

var names = [
    "Yajoux", 
    "Yarly", 
    "Yasou", 
    "YasShine", 
    "Yasminity"
];
var explanations = [
    "Yasmine + bijou",
    "Yasmine + jewelry",
    "Yasmine + bijou"
];
var slogans = [
	"Yajoux, des bijoux qui captivent et séduisent, un éclat rare qui toujours hypnotise.",
	"Yarly, la touche qui fait briller, un charme que l’on aime à admirer.",
	"Quand Yasou crée des bijoux, chaque éclat est un atout, une touche de luxe qui séduit tous les coups.",
	"YasShine apporte la lumière, chaque pièce est un éclat qui sait plaire.",
	"Yasminity, l’éclat de l’infini, chaque création est une touche de magie."
];

for (var i = 0; i < names.length; i++) {
    var card = createElement("div", "card", cards);
    var cardContent = createElement("div", "card-content", card);
    var CardInfoWrapper = createElement("div", "card-info-wrapper", cardContent);
    var cardInfo = createElement("div", "card-info", CardInfoWrapper);
    var cardInfoTitle = createElement("div", "card-info-title", cardInfo);

    var nameWrapper = createElement("h3", "name", cardInfoTitle);
    var sloganElem = createElement("h4", "slogan", cardInfoTitle);

    var magic = createElement("span", "magic", nameWrapper);
    var star1 = createElement("span", "magic-star", magic);
    var star2 = createElement("span", "magic-star", magic);
    var star3 = createElement("span", "magic-star", magic);

    var nameSpan = createElement("span", "magic-text", magic);

    star1.innerHTML = "\
        <svg viewBox=\"0 0 512 512\">\
            <path d=\"M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z\" />\
        </svg>\
    ";

    star2.innerHTML = "\
        <svg viewBox=\"0 0 512 512\">\
            <path d=\"M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z\" />\
        </svg>\
    ";
    
    star3.innerHTML = "\
        <svg viewBox=\"0 0 512 512\">\
            <path d=\"M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z\" />\
        </svg>\
    ";

    nameSpan.innerText = names[i];
    nameSpan.title = explanations[i] ? explanations[i] : "";
    sloganElem.innerText = slogans[i];

    // var div = document.createElement("div");

    // var pname = document.createElement("p");
    // pname.className = "name";²
    // pname.innerText = names[i];

    // var pslogan = document.createElement("p");
    // pslogan.innerText = slogans[i];
 
    // div.append(pname, pslogan);
    // container.append(div);
}

// Array.from(cards.children).forEach((child) => {
//     child.onclick = () => {
//         var selected = document.getElementById("selected");
//         if (selected) {
//             selected.id = "";
//         }

//         child.id = "selected";
//     };
// });

function createElement(tag, className, parent) {
    var elem = document.createElement(tag);
    elem.className = className;
    parent.append(elem);
    return elem;
}