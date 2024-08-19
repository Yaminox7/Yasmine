import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set, update, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://database-3573b-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
var path = "opinions/";
var opinionCollection = ref(database, path);

function make_ref(name) {
    return ref(database, name);
}

function addItem(reference, item) {
    push(reference, item);
}

function addItemWithId(id, item) {
    set(ref(database, path+id), item);
}

function changeData(id, data) {
    update(ref(database), {["/"+path+id]: data});
}

export function getValues(callback) {
    get(child(ref(database), path)).then((snapshot) => {
        callback(snapshot.exists() ? Object.values(snapshot.val()) : "");
    }).catch((error) => {
        console.error(error);
    });
}

export function getIds(callback) {
    get(child(ref(database), path)).then((snapshot) => {
        callback(snapshot.exists() ? Object.keys(snapshot.val()) : "");
    }).catch((error) => {
        console.error(error);
    });
}

export function getValueByID(id, callback) {
    get(child(ref(database), path+id)).then((snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : "");
    }).catch((error) => {
        console.error(error);
    });
}

export function getAll(callback) {
    get(child(ref(database), path)).then((snapshot) => {
        callback(snapshot.exists() ? Object.entries(snapshot.val()) : "");
    }).catch((error) => {
        console.error(error);
    });
}

export function readValueInTime(callback) {
    onValue(ref(database, path), function(snapshot) {
        callback(snapshot.exists() ? Object.values(snapshot.val()) : "");
    });
}

export function readIdInTime(callback) {
    onValue(ref(database, path), function(snapshot) {
        callback(snapshot.exists() ? Object.keys(snapshot.val()) : "");
    });
}

export function readInTime(callback) {
    onValue(ref(database, path), function(snapshot) {
        callback(snapshot.exists() ? Object.entries(snapshot.val()) : "");
    });
}

function deleteItem(id) {
    remove(ref(database, path + id));
}

function deleteItemFrom(path, id) {
    remove(ref(database, path + id));
}

export function clearID(id) {
    deleteItem(id);
}

export function clearAll() {
    deleteItem("");
}

export function setItem(id, item) {
    changeData(id, item);
}

export function logDB() {
    getValueByID("0", (e) => {
        if (e != "") {
            console.log("0: ", e);
        }
    });
    getValues((e) => {
        if (e != "") {
            console.log(e);
        }
    });
    getIds((e) => {
        if (e != "") {
            console.log(e);
        }
    });
    getAll((e) => {
        if (e != "") {
            console.log(e);
        }
    });
}

export function addItemTo(id, item) {
    getValueByID(id, (old) => {
        if (typeof(old) != "object") { return; }
        old.push(item);
        changeData(id, old);
    })
}

export function addItemToW(id, item) {
    getIds((ids) => {
        Array.from(ids).forEach((_id) => {
            removeAllItemFrom(_id, item);
        });
        getValueByID(id, (old) => {
            if (typeof(old) != "object") { 
                changeData(id, [item]);
            } else {
                old.push(item);
                changeData(id, old);
            }
        });
    });
}

export function addItemsTo(id, items) {
    getValueByID(id, (old) => {
        if (typeof(old) != "object") { return; }
        changeData(id, old.concat(items));
    })
}

export function removeItemFrom(id, item) {
    getValueByID(id, (old) => {
        if (typeof(old) != "object") { return; }
        var index = old.indexOf(item);
        if (index == -1) { return; }
        old.splice(index, 1);
        changeData(id, old);
    })
}

export function removeAllItemFrom(id, item) {
    getValueByID(id, (old) => {
        if (typeof(old) != "object") { return; }
        changeData(id, old.filter((e) => { return e != item; }));
    })
}
