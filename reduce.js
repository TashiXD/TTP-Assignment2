const arr = [1,2,3,4];

function myReduce(arr, callback, initialValue){
    let accumulator = 0;
    let currentValue = 0;
    //if its a falsy then there is no initialValue
    //otherwise call the callback function with initial value and
    //set the result of callback to accumulator
    if(typeof initialValue){
        accumulator = callback(initialValue, currentValue);
    } 

    /**
     * used a for loop to iterate through the arr
     * set currentValue to the element that is being processed
     * set accumulator to the result of callback function 
     * which returns the sum of acc and currentValue
     */
    for(let i = 0; i < arr.length; i++){
        currentValue = arr[i];
        accumulator = callback(accumulator,currentValue);
    }
    return accumulator;
}


//function that takes in two arugements and returns their sum
function reducer(accumulator, currentValue){
    return accumulator+currentValue;
}

const sum = myReduce(arr,reducer,10);
console.log(sum);