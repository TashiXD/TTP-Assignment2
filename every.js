const arr = [2,4,6,8,1];

/**
 * myEvery function takes in array and a callback function
 * uses a loop to iterate through the array and checks if the 
 * element is even or odd
 * if any of the elements are odd the function will stop and return false
 * if every element is even, the function will return true
 */
function myEvery(arr,callBack){
    for(let i = 0; i < arr.length; i++){
        if(!callBack(arr[i])){
            return false;
        }
    }
    return true;
}

//checks num if its even or not if its even return true otherwise false
function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

const isAllEven = myEvery(arr, isEven);
console.log(isAllEven);