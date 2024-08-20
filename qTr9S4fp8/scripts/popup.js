var popups = document.getElementById("popups");
setInterval(updateTimers, 1000);

export function popup(text, time) {
    var popupEl = createElement("div", "popup", popups);
    var paraEl = createElement("p", "", popupEl);
    var textEl = createElement("span", "text", paraEl);
    var timestampEl = createElement("span", "time-stamp", paraEl);
    var timestartEl = createElement("p", "time-start", popupEl);

    textEl.innerText = text + " ";
    timestampEl.innerText = formatTime(time);
    timestartEl.innerText = formatUTCTime(time);
    timestartEl.value = time;

    return popupEl;
}

function createElement(tag, className, parent) {
    var elem = document.createElement(tag);
    if (className != "") elem.className = className;
    parent.append(elem)
    return elem;
}

function formatTime(t) {
    var s = parseInt(t / 1000);
    var y = Math.floor(s / (3600*24*365));
    var M = Math.floor(s / (3600*24*30)) % 12;
    var d = Math.floor(s / (3600*24)) % 30;
    var h = Math.floor(s / 3600) % 24;
    var m = Math.floor(s / 60) % 60;
    s %= 60;
    var res = "(";
    if (y > 0) { res += `${y}a ` }
    if (M > 0) { res += `${M}m ` }
    if (d > 0) { res += `${d}j ` }
    if (h > 0) { res += `${h}h ` }
    if (m > 0) { res += `${m}min ` }
    if (s > 0 || res == "(") { res += `${s}s ` }
    return (res.endsWith(" ") ? res.slice(0, res.length-1) : res) + ")";
}

function formatString(str) {
    return (String(str).length < 2 ? "0" : "") + str;
}

function formatUTCTime(time) {
    if (isNaN(time) || time == null || time == undefined) {
        return;
    }

    var day = new Date(time);
    var yyyy = day.getFullYear();
    var mm = formatString(day.getMonth() + 1);
    var dd = formatString(day.getDate());
    var h = formatString(day.getHours());
    var m = formatString(day.getMinutes());
    var s = formatString(day.getSeconds());

    return `${dd}/${mm}/${yyyy} ${h}:${m}:${s}`;
}

function updateTimers() {
    for (var popup of document.getElementsByClassName("popup")) {
        var startEl = popup.getElementsByClassName("time-start")[0];
        var stampEl = popup.getElementsByClassName("time-stamp")[0];

        var start = new Date(startEl.value);
        var t = (new Date()) - start;
        stampEl.innerText = formatTime(t);
    }
}