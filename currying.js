function sum(a, b, c) {
    return a + b + c;
}

function curry(func = required()) {
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function');
    }

    function nest(N, args) {
        return (...xs) => {
            if (!Number.isInteger(...xs)) {
                throw new Error('argument is not a integer');
            }
            if (N - xs.length === 0) {
                return func(...args, ...xs);
            }
            return nest(N - xs.length, [...args, ...xs]);
        };
    }
    return nest(func.length, []);
}