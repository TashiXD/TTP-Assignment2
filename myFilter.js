const arr = [1, 2, 3, 5, 10, 2, 14, 4, 8];

/*creating myFilter function which takes array and callback as an arguement.
    Use forloop to iterate through the array and call the callBack function in this
    case its the lessthan5 which returns a boolean value and if the value returned is 
    true, add the array's i'th element to the filteredArr
*/
function myFilter(arr, callBack) {
  const filteredArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      filteredArr[counter] = arr[i];
      counter++;
    }
  }
  return filteredArr;
}

/*
A function that returns true if the value is less than 5 and false otherwise
*/
function lessthan5(num) {
  if (num < 5) {
    return true;
  } else {
    return false;
  }
}

const filtered = myFilter(arr, lessthan5);
console.log(`Array: ${arr}`);
console.log(`Filtered array: ${filtered}`);
