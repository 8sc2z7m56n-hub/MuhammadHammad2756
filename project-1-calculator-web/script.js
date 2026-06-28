// Buggy Calculator Script

function appendValue(val) {
    const display = document.getElementById("calc-display");
    // BUG 1: Using 'val' instead of 'value' to set/get the value of the HTML input element
    // Also, it should append the value, but here it might overwrite or fail due to property typo.
    display.val += val; 
}

function clearDisplay() {
    // BUG 2: ReferenceError - 'displays' is not defined (should be display or document.getElementById)
    displays.value = "";
}

function deleteLast() {
    const display = document.getElementById("calc-display");
    // BUG 3: logic error - slice parameter is wrong, or trying to do slice on undefined property
    display.value = display.value.slice(0, 1); // This only keeps the first character instead of removing the last one!
}

function calculateResult() {
    const display = document.getElementById("calc-display");
    try {
        // BUG 4: Safety / Logic error - eval is run but if there is division by zero or empty string it fails.
        // Let's add a syntax error here too: missing closing parenthesis for 'catch' block or typo in eval
        let result = eval(display.value; // SYNTAX ERROR: Missing closing parenthesis in eval call
        
        if (result === Infinity) {
            display.value = "Error: Div by 0";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
