// Get display element
let display = document.getElementById("display");

// Add value to display
function append(value){
    display.value += value;
}

// Clear all values
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate(){
    try{
        // Evaluate expression safely
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
