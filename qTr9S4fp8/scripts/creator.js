var container = document.getElementById("container");
for (var i = 0; i < names.length; i++) {
    var p = createElement("p", "", container);
    p.innerText = names[i];
}

function createElement(tag, className, parent) {
    var elem = document.createElement(tag);
    if (className != "") elem.className = className;
    parent.append(elem)
    return elem;
}
