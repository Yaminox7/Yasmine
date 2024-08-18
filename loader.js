var container = document.getElementById("container");

var names = [
    "YAJOUX: Yasmine + bijou", 
    "YARLY: Yasmine + jewelry", 
    "YASOU: Yasmine + bijou", 
    "YasShine", 
    "Yasminity"
];
var slogans = [
	"Yajoux, des bijoux qui captivent et séduisent, un éclat rare qui toujours hypnotise.",
	"Yarly, la touche qui fait briller, un charme que l’on aime à admirer.",
	"Quand Yasou crée des bijoux, chaque éclat est un atout, une touche de luxe qui séduit tous les coups.",
	"YasShine apporte la lumière, chaque pièce est un éclat qui sait plaire.",
	"Yasminity, l’éclat de l’infini, chaque création est une touche de magie."
];

for (var i = 0; i < names.length; i++) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    var p = document.createElement("p");
    legend.innerText = names[i];
    p.innerText = slogans[i];

    fieldset.addEventListener("click", () => {
        var selected = document.getElementById("selected");
        if (selected) {
            selected.id = "";
        }
        
        fieldset.id = "selected";
    });

    fieldset.append(p, legend);
    container.append(fieldset);
}