// Buggy Calculator Script

function appendValue(val) {
    const display = document.getElementById("calc-display");
    // FIX: Changed 'val' to 'value' to correctly set display input element value
    display.value += val; 
}

function clearDisplay() {
    // FIX: Corrected ReferenceError displays -> display
    const display = document.getElementById("calc-display");
    display.value = "";
}

function deleteLast() {
    const display = document.getElementById("calc-display");
    // FIX: Slice correctly to remove only the last character
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("calc-display");
    try {
        // FIX: Added missing closing parenthesis to eval call
        let result = eval(display.value);
        
        if (result === Infinity) {
            display.value = "Error: Div by 0";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
