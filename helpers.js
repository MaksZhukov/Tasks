function checkNumbers(...variables) {
    for (let i = 0; i < variables.length; i++) {
        if (typeof variables[i] !== 'number') {
            return false;
        }
    }
    return true;
}
function checkArgs(...args){
    if (args.length === 0) {
        throw 'count parameters equally 0';
    }
    if (!checkNumbers(...args)) {
        throw 'one of the variables is not number';
    }
}