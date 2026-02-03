var key = "myDataKey";

// SAVE
document.querySelector(".save").onclick = function() {
// a. Get the value from the first input (saveValue)
var inputValue = document.getElementById("saveValue").value;

// c. Save the variable to localStorage using the key and the input value
localStorage.setItem(key, inputValue);

// d. Clear the input to blank
document.getElementById("saveValue").value = "";
};

// LOAD
document.querySelector(".load").onclick = function() {
// a. Using localStorage and the key defined on line 1
// b. Get the item from localStorage
// c. Store it to a variable
var storedValue = localStorage.getItem(key);

// CHALLENGE: Check if null (data has been deleted)
if (storedValue === null) {
document.getElementById("loadValue").value = key + " has been deleted.";
} else {
// d. Display the variable to the input box
document.getElementById("loadValue").value = storedValue;
}
};

// UPDATE
document.querySelector(".update").onclick = function() {
// Get the new value from the update input
var newValue = document.getElementById("updateValue").value;

// Save to localStorage using the same key (overwrites existing data)
localStorage.setItem(key, newValue);

// Clear the input
document.getElementById("updateValue").value = "";
};

// DELETE
document.querySelector(".delete").onclick = function() {
// 1. Get the value from the delete input (though we use the fixed key)
var deleteKeyInput = document.getElementById("deleteKey").value;

// Store the value in a variable (as per instructions)
var keyToDelete = deleteKeyInput;

// Using the variable, call localStorage removeItem
// Note: Based on the instructions context, we remove using the main key
// But if you want to use the input key instead, use: localStorage.removeItem(keyToDelete);
localStorage.removeItem(key);

// Clear the input
document.getElementById("deleteKey").value = "";
};

// Alternative DELETE function for the HTML's onclick attribute
function deleteData() {
// Get the value from the delete input
var deleteKeyInput = document.getElementById("deleteKey").value;

// Store in variable
var keyToDelete = deleteKeyInput;

// Remove from localStorage
localStorage.removeItem(keyToDelete);

// Clear the input
document.getElementById("deleteKey").value = "";
}
