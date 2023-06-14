const arr = [1,2,3];

function myMap (arr, callBack){
    const newArr =[];
    for(let i = 0; i < arr.length; i++){
        callBack(newArr,arr[i], i);
    }
    return newArr;
}

function square(newArr, value, index){
    return newArr[index] = value*value;
}

const modded = myMap(arr, square);

console.log(`Before: ${arr}`);
console.log(`New Arr: ${modded}`);