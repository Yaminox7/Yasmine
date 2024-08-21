import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set, update, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appConfig = {
    databaseURL: "https://database-3573b-default-rtdb.europe-west1.firebasedatabase.app/"
};
console.log(appConfig);

const app = initializeApp(appConfig);
const database = getDatabase(app);
var opinionCollection = ref(database, "opinions/");

function getValueByID(path, id, callback) {
    get(child(ref(database), path+id)).then((snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : "");
    }).catch((error) => {
        console.error(error);
    });
}

function getIds(path, callback) {
    get(child(ref(database), path)).then((snapshot) => {
        callback(snapshot.exists() ? Object.keys(snapshot.val()) : "");
    }).catch((error) => {
        console.error(error);
    });
}

function updateData(path, id, item) {
    update(ref(database), {["/"+path+id]: item});
}

function removeAllInstancesOfItemInID(path, id, item) {
    getValueByID(path, id, (old) => {
        updateData(path, id, old.filter((e) => { return e != item; }));
    });
}

export function addItemTo(path, id, item) {
    getIds(path, (ids) => {
        Array.from(ids).forEach((_id) => {
            removeAllInstancesOfItemInID(path, _id, item);
        });
        getValueByID(path, id, (old) => {
            if (typeof(old) != "object") { 
                updateData(path, id, [item]);
            } else {
                old.push(item);
                updateData(path, id, old);
            }
        });
    });
}

export function removeItemFrom(path, id, item) {
    getValueByID(path, id, (old) => {
        var index = old.indexOf(item);
        if (index == -1) { return; }
        old.splice(index, 1);
        updateData(path, id, old);
    });
}

export function addObjectTo(path, object) {
    push(ref(database, path), object);
}
