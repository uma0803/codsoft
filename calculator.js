document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let currentOperator = "";
    let resultDisplayed = false;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const buttonValue = button.id;

            if (buttonValue === "clear") {
                clearDisplay();
            } else if (buttonValue === "backspace") {
                backspace();
            } else if (buttonValue === "equals") {
                calculate();
            } else if (buttonValue === "decimal") {
                addDecimal();
            } else {
                appendToDisplay(buttonValue);
            }
        });
    });

    function appendToDisplay(value) {
        if (resultDisplayed) {
            clearDisplay();
        }
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = "";
        currentOperator = "";
        resultDisplayed = false;
        display.value = "";
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    function addDecimal() {
        if (currentInput.indexOf(".") === -1) {
            appendToDisplay(".");
        }
    }

    function calculate() {
        let result;
        const operand1 = parseFloat(currentInput);
        const operand2 = parseFloat(currentOperator);
        switch (currentOperator) {
            case "+":
                result = operand2 + operand1;
                break;
            case "-":
                result = operand2 - operand1;
                break;
            case "*":
                result = operand2 * operand1;
                break;
            case "/":
                result = operand2 / operand1;
                break;
            default:
                result = operand1;
        }
        clearDisplay();
        display.value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    }
});
