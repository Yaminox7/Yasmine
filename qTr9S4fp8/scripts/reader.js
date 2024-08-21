import { readInTime } from "./functions.js"
import { popup } from "./popup.js";
import { stringify, createFile } from "./file.js";
import { isMobile } from "./mobile.js";

var data = [];
var tableData = [];
var firstTime = true;
readInTime("opinions/", (e) => {
    data = [];
    tableData = [];
    if (e == "") {
        for (var i = 0; i < names.length; i++) {
            tableData.push({category: i, value: 0});
            data.push([i, 0]);
        }  
    } else {
        var absents = [];
        for (var i = 0; i < names.length; i++) {
            absents.push(i);
        }
        for (var entry of e) {
            var key = parseInt(entry[0]);
            var value = entry[1];
            tableData.push({category: key, value: value.length});
            data.push([key, value]);
            var index = absents.indexOf(key);
            if (index == -1) { continue; }
            absents.splice(index, 1);
        }
        for (var i of absents) {
            tableData.push({category: i, value: 0});
            data.push([i, 0]);
        }  
    }
    tableData = sortObjectsArray(tableData, "category");
    data = sortArray(data);
    for (var i = 0; i < names.length; i++) {
        tableData[i].category = names[parseInt(tableData[i].category)];
        data[i] = [names[parseInt(data[i][0])], data[i][1]];
    }
    update();
    if (!firstTime) {
    }
    firstTime = false;
});

readInTime("logs/", (e) => {
    var popups = document.getElementById("popups");
    popups.innerHTML = "";
    if (e.length == 0) {
        var p = document.createElement("p");
        p.innerText = "Pas encore de logs...";
        p.id = "empty";
        popups.append(p);
    } else {
        for (var i = e.length-1; i >= 0; i--) {
            var dict = e[i][1];
            var name_str = dict["id"].split("_");
            var name = name_str[0];
            var fname = name_str[1];
            var type = dict["type"];
            var choice = dict["choice"];
            var time = dict["at"];
            var text = `${fname} ${name} `;
            if (type == "add") {
                text += `a choisi ${names[choice]}`;
            } else if (type == "move") {
                text += `a changé d'avis pour ${names[choice]}`;
            } else if (type == "remove") {
                text += `a supprimé son avis de ${names[choice]}`;
            } 
            popup(text, time);
        }
    }
});

var chart;
function update() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = "";
    var total = 0;
    tableData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.category}</td>
            <td>${item.value}</td>
        `;
        total += item.value;
        tableBody.appendChild(row);
    });
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td>${total}</td>
    `;
    tableBody.appendChild(totalRow);
    if (chart) {
        chart.destroy();
    }
    chart = graph(tableData);
}

var stats = document.getElementById("stats");
if (isMobile()) {
    stats.title = "Copier les statistiques";
    stats.onclick = () => {
        navigator.clipboard.writeText(stringify(data));
    };
} else {
    stats.title = "Télécharger les statistiques";
    stats.onclick = () => {
        createFile("statistiques.txt", stringify(data));
    };
}

function sortArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }
    return array.slice().sort((a, b) => a[0] - b[0]);
}

function sortObjectsArray(array, key) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }
    return array.slice().sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}