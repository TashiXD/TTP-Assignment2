const arr = [1, 2, 3, 5, 10, 2, 14, 4, 8];

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
