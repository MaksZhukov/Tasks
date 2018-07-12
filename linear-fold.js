function reduce(arr, callback,initValue) {
    let prev = initValue || undefined;
    for (let i = 0; i < arr.length; i++) {
        callback(prev, arr[i], i, arr);
    }
}

function validateReduce(func,arr,callback,initValue){
    checkIsArray(arr);
    checkIsNumbers(arr);
    checkIsObject(initValue);
    checkIsFunction(callback);
    func(arr,callback,initValue);
}

validateReduce(reduce,[1,2,3],(prev,curr,index,arr)=>{

},{});