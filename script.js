var key = "myDataKey";


document.querySelector(".save").onclick = function() {

var inputValue = document.getElementById("saveValue").value;


localStorage.setItem(key, inputValue);


document.getElementById("saveValue").value = "";
};


document.querySelector(".load").onclick = function() {

var storedValue = localStorage.getItem(key);


if (storedValue === null) {
document.getElementById("loadValue").value = key + " has been deleted.";

document.getElementById("loadValue").value = storedValue;
}
};

document.querySelector(".update").onclick = function() {

var newValue = document.getElementById("updateValue").value;


localStorage.setItem(key, newValue);


document.getElementById("updateValue").value = "";
};


document.querySelector(".delete").onclick = function() {

var deleteKeyInput = document.getElementById("deleteKey").value;


var keyToDelete = deleteKeyInput;

Item(keyToDelete);
localStorage.removeItem(key);


document.getElementById("deleteKey").value = "";
};


function deleteData() {

var deleteKeyInput = document.getElementById("deleteKey").value;


var keyToDelete = deleteKeyInput;


localStorage.removeItem(keyToDelete);


document.getElementById("deleteKey").value = "";
}
