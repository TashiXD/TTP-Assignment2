const arr = ['A','B','C'];

//this function returns a new array that is reversed of array that was passed as arguement 
const reverseArray = (arr) =>{
    const reverse = [];
    for(let i = arr.length; i >= 0; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

/**
 * This function modifies the array that was pass as arguement so it is reversed
 * First find the mid point of the array
 * once you have the mid point, we can loop from start to mid and
 * swap the first and last elements of array by storing the start array in a temp variable
 * then assigning the value of last to first index and temp to the last index,
 * and so on for the rest of the array
 *      let temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
 * 
 */
const reverseArrayInPlace = (arr) => {
    let midPoint;
    if(arr.length%2==0){
        midPoint = arr.length/2
    }else{
        midPoint = Math.ceil(arr.length/2);
    }
    for(let i = 0; i < midPoint; i++){
        let temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
}
console.log(`Original Array: ${arr}`)
console.log(`Reversed Array: ${reverseArray(arr)}`);
reverseArrayInPlace(arr);
console.log(`ReversedInPlace Array: ${arr}`);
