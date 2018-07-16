function sum(a, b, c) {
    return a + b + c;
}

function lazyEvaluation(func = required(), delay = required()) {
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function');
    }
    if (!Number.isInteger(delay)) {
        throw new Error('Second argument is not a number');
    }
    return (...cfArgs) => {
        setTimeout(() => {
            func(...cfArgs)
        }, delay);
    }
}