function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculate(operator) {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result + " " + operator + " ";
}

function calculateResult() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
