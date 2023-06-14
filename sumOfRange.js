/**
 * Range takes three arguements start, end and step with default value as 1
 * and returns an array of numbers from start to end and
 * if there are steps include the steps need to take as well
 * 
 * example: range(1,4,2)
 * [1,3]
 * 
 */

const range = (start,end,step = 1) =>{
    const arr = [];
    //if the step is in negative number than turn it into an abs value
    if(step<0){
        step = Math.abs(step);
    }

    //if start is greater than end, the loop will count down and
    //add values to the array in decending order
    //and return the arr
    if(start>end){
        for(let i = start; i >= end; i= i - step ){
            arr.push(i);
        }
        return arr;
    }
    //else the loop will count up and
    //add values to the array in ascending order
    //and return the arr
    else{
        for(let i = start; i <= end; i = i+step ){
            arr.push(i);
        }
        return arr;
    }
}

/**
 * Sum will take an callback as an arguement and get the arr 
 * that is returned by the callBack function and iterate through
 * the array and add all the elements value and return the total sum
 */
const sum = (callBack) =>{
    const arr = callBack;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(range(1,10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5,2,-1));
// → [5, 4, 3, 2]
console.log(sum(range(1,10)));
// → 55