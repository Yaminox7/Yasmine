import { readInTime } from "./functions.js"

var data = [];
readInTime((e) => {
    data = [];
    if (e == "") {
        for (var i = 0; i < names.length; i++) {
            data.push({category: i, value: 0});
        }  
    } else {
        var absents = [];
        for (var i = 0; i < names.length; i++) {
            absents.push(i);
        }
        for (var entry of e) {
            var key = parseInt(entry[0]);
            var value = entry[1].length;
            data.push({category: key, value: value});
            var index = absents.indexOf(key);
            if (index == -1) { continue; }
            absents.splice(index, 1);
        }
        for (var i of absents) {
            data.push({category: i, value: 0});
        }  
    }
    data = sortObjectsArray(data, "category");
    data.forEach((item) => {
        item.category = names[item.category];
    });
    update();
});

var chart;
function update() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.category}</td>
            <td>${item.value}</td>
        `;
        tableBody.appendChild(row);
    });
    if (chart) {
        chart.destroy();
    }
    chart = graph(data);
}

function sortArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }
    return array.slice().sort((a, b) => a - b);
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