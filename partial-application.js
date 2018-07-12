function sum(...variables) {
    return (...args) => {
        return variables.concat(args).reduce((prev, curr) => prev + curr)
    }

}

function validateSum(func,...args) {
    checkCountArgs(args);
    checkIsNumbers(args);
    return func(...args);
}

;
let sumWithParameters = validateSum(sum,1,2,3);

console.log(sumWithParameters(1, 2, 3));