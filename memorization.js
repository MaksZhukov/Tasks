function sum(a, b, c) {
    return a + b + c;
}

function memorization(func = required()) {
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function');
    }
    let cache = {};
    return (...args)=>{
        for (let number of args) {
            if (!Number.isInteger(number)) {
                throw new Error('One of the arguments is not a number');
            }
        }
        let key = args.toString();
        if (key in cache) {
            return cache[key];
        }
        return cache[key] = func(...args);
    };
}