const arr = [1,2,3]

//this function increments the arrays length and adds the element
//to the last index of array and returns the new length
function myPush(arr, element){
    arr.length++;
    arr[arr.length-1] = element;
    return arr.length;
}
//pushing 4
myPush(arr, 4);
console.log(`Arr: ${arr}`);
console.log(arr.length);
//pushing 5
myPush(arr, 5);
console.log(`Arr: ${arr}`);
console.log(arr.length);