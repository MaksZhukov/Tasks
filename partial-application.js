function sum(a, b, c) {
    return a + b + c;
}

function partialApplication(func = required(), ...paArgs) {
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function');
    }
    for (let number of paArgs) {
        if (!Number.isInteger(number)) {
            throw new Error('One of the arguments is not a number');
        }
    }
    return (...cfArgs) => {
        return func([...cfArgs, ...paArgs]);
    }
}