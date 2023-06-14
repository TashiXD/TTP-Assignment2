const arr = [1,2,3,4];


/**
 * This function takes in array, a callback function, the element we want to search and 
 * from what index we want to start looking from
 * 
 * if fromIndex's value is larger or equal to array's length return -1.
 * if there is no fromIndex passed or the fromIndex is a negative value,
 * the loop will start from 0.
 * otherwise loop fromIndex to end of array.
 * 
 * call the callback function which takes in the element to be search and the current element
 * if callback returns true, our function will the index of the element that was just processed
 * 
 * otherwise, return -1;
 * 
 */
function myIndexOf(arr, callBack, searchElement, fromIndex){
    let i = 0;
    if(fromIndex){
        if(fromIndex >= arr.length){
            return -1;
        }else if (fromIndex < 0){
            i = 0;
        }else{
            i = fromIndex;
        }
    }
    for(i; i < arr.length; i++ ){
       if(callBack(searchElement, arr[i])){
        return i;
       }
    }
    return -1;
}

//compares two arguements and return true if they are the same value else
//false
function isSame(searchElement, element){
    if(searchElement === element){
        return true;
    }else{
        return false;
    }
}

const found = myIndexOf(arr, isSame, 4, 2);
console.log(found);