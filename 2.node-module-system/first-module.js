function add(a, b) {
    return a + b;
}

function multiply(a, b, c) {
    return a * b * c;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Nolga bo`lish mumkin emas !")
    }
    return a / b;
}

module.exports = {
    add,
    multiply,
    divide
}