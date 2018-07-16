function linearFold(arr = required(), callback = require(), initValue) {
    const countCallbackArgs = 4;
    if (!Array.isArray(arr)) {
        throw new Error('First argument is not a function!');
    }
    for (let value of arr) {
        if (!Number.isInteger(value)) {
            throw new Error('One of element the array is not a number');
        }
    }
    if (typeof callback !== 'function') {
        throw new Error('First argument is not a function');
    }
    if (callback.length > countCallbackArgs) {
        throw new Error('Function callback has to accept not more 4 parameters');
    }
    if (initValue) {
        if (typeof initValue !== 'object') {
            throw new Error('initValue is not an object');
        }
    }
    let prev = initValue;
    for (let i = 0; i < arr.length; i++) {
        prev = callback(prev, arr[i], i, arr);
    }
    return prev;
}

function sumPrevWithCurr(prev, curr, index, arr) {
    return prev+curr;
}