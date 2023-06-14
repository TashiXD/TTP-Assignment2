const arr = [1,2,3,4,10];

/*
    the mySome function takes an array and a callback function
    and returns true if any of the elements satisfy the callback function
    in this case, if any one of the element of the array is larger than 5
    else return false
*/
function mySome(arr, callBack){
    for(let i = 0; i < arr.length; i++){
        if(morethan5(arr[i])){
            return true;
        }
    }
    return false;
}


//a function that checks if the num is larger than 5, if
function morethan5(num){
    if(num>5){
        return true;
    }else{
        return false;
    }
}

const isSomeMorethan5 = mySome(arr, morethan5);

console.log(isSomeMorethan5);