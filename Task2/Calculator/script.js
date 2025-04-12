
let display = document.getElementById("display");
let clearBtn = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");
let equalsBtn = document.getElementById("equals");
let numberBtns = document.getElementsByClassName("number");
let operatorBtns = document.getElementsByClassName("operator");

let currentNumber = "";
let previousNumber = "";
let currentOperator = "";

for (let btn of numberBtns) {
    btn.addEventListener("click", () => {
        if (btn.id === "dot" && currentNumber.includes(".")) return;
        currentNumber += btn.textContent;
        display.value = currentNumber;
    });
}

for (let btn of operatorBtns) {
    btn.addEventListener("click", () => {
        if (currentNumber !== "") {
            previousNumber = currentNumber;
            currentNumber = "";
            currentOperator = btn.textContent;
        }
    });
}

equalsBtn.addEventListener("click", () => {
    if (currentNumber !== "" && previousNumber !== "") {
        let result;
        switch (currentOperator) {
            case "+":
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case "-":
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case "*":
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case "/":
                if (parseFloat(currentNumber) === 0) {
                    result = "Error";
                } else {
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                }
                break;
            default:
                result = "";
        }
        display.value = result;
        previousNumber = "";
        currentNumber = result.toString();
    }
});

clearBtn.addEventListener("click", () => {
    display.value = "";
    currentNumber = "";
    previousNumber = "";
    currentOperator = "";
});

deleteBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = currentNumber.slice(0, -1);
        display.value = currentNumber;
    }
});


