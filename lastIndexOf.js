const arr = [1,4,3,4,3,5,2];


/**
 * This function takes in array, a callback function, the element we want to search and 
 * from what last index we want to start looking from
 * 
 * using a backwards loop to find the last instance of the element and return the index
 * 
 * if fromIndex's value is larger or equal to array's length return -1.
 * if there is no fromIndex passed or the fromIndex is a negative value,
 * the loop will start from the arr.lenght-1 to 0.
 * otherwise loop from the end of array to fromIndex.
 * 
 * call the callback function which takes in the element to be search and the current element
 * if callback returns true, our function will the index of the element that was just processed
 * 
 * otherwise, return -1;
 * 
 */
function myIndexOf(arr, callBack, searchElement, fromIndex){
    let toIndex = 0;
    if(fromIndex){
        if(fromIndex >= arr.length){
            return -1;
        }else if (fromIndex < 0){
            toIndex = 0;
        }else{
            toIndex = fromIndex;
        }
    }
    for(let i = arr.length-1; i > toIndex ; i-- ){
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

const found = myIndexOf(arr, isSame, 4, -1);
console.log(found);