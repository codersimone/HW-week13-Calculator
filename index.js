function getValue() {
    let num = prompt ("Введите число");
    num = Number(num);
    return num;
}

function sumAddition() {
    const num1 = getValue();
    const num2 = getValue();
    alert(num1 + num2);
}

function sumSubtraction() {
    const num1 = getValue();
    const num2 = getValue();
    alert(num1 - num2);
}

function sumMultiplication() {
    const num1 = getValue();
    const num2 = getValue();
    alert(num1 * num2);
}

function sumDivision() {
    const num1 = getValue();
    const num2 = getValue();
    alert(num1 / num2);
}
