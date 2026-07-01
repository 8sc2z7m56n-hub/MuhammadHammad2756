// Buggy Calculator Script

function appendValue(val) {
    const display = document.getElementById("calc-display");
    display.value += val; 
}

function clearDisplay() {
    const display = document.getElementById("calc-display");
    display.value = "";
}

function deleteLast() {
    const display = document.getElementById("calc-display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("calc-display");
    try {
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