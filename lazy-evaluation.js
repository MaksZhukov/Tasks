function sum(...args) {
    return args.reduce((prev, curr) => prev + curr);
}
function validateSum(func,...args){
    checkCountArgs(args);
    checkIsNumbers(args);
    func(...args);
}
setTimeout(validateSum(sum,1,2,3,4), 1);