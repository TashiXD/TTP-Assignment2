const arr = [1,2,3];

function myEach (arr, callBack){
    for(let i = 0; i < arr.length; i++){
        callBack(arr[i]);
    }
    return undefined;
}

function print(i){
    console.log(i);
}

myEach(arr, print);