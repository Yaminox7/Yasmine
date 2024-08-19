var cards = document.getElementById("cards");

for (var i = 0; i < names.length; i++) {
    var card = createElement("div", "card", cards);

    var cardContent = createElement("div", "card-content", card);
    var CardInfoWrapper = createElement("div", "card-info-wrapper", cardContent);
    var cardInfo = createElement("div", "card-info", CardInfoWrapper);
    var cardInfoTitle = createElement("div", "card-info-title", cardInfo);

    var nameWrapper = createElement("h3", "name", cardInfoTitle);
    var sloganElem = createElement("h4", "slogan", cardInfoTitle);
    var inputWrapper = createElement("div", "radio-wrapper", CardInfoWrapper);
    var inputRadio = createElement("input", "radio", inputWrapper);
    var inputLabel = createElement("label", "radio-label", inputWrapper);
    
    if (stars) {
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
    } else {
        nameWrapper.innerText = names[i];
    }

    inputRadio.type = "radio";
    inputRadio.name = inputRadio.className;
    inputRadio.value = i;

    sloganElem.innerText = slogans[i];

    var selected = localStorage.getItem("selected");
    if (selected) {
        if (parseInt(selected) == i) {
            card.id = "selected";
            inputRadio.checked = true;
        }
    }
}

function createElement(tag, className, parent) {
    var elem = document.createElement(tag);
    elem.className = className;
    parent.append(elem);
    return elem;
}