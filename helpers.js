function checkIsNumbers(numbers) {
    for (let number of numbers) {
        if (!Number.isInteger(number)) {
            throw 'One of the variables is not number';
        }
    }
}

function checkCountArgs(args) {
    if (args.length === 0) {
        throw 'Count parameters equally 0';
    }
}

function checkIsArray(arr) {
    if (!Array.isArray(arr)) {
        throw 'This is not array';
    }
}

function checkIsObject(obj) {
    if (typeof obj !== 'object') {
        throw 'This is not object';
    }
}

function checkIsFunction(fn) {
    if (typeof fn !== 'function') {
        throw 'This is not function';
    }
}