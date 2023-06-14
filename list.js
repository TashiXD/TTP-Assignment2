
//converts array to a list
const arrayToList =(arr) =>{
   let list = null;
   for(let i = arr.length -1; i >=0; i--){
    list = {value:arr[i],rest:list};
   }
   return list;
}
 
//converts list to an array
const listToArray = (list) =>{
    let arr = [];
    for (let node = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}
//takes an element and a list and creates a new list that adds the 
//element to the front of the input list
const prepend = (element, list) =>{
    return list = {value:element,rest:list};
}
/**
 *  takes a list and a number and returns the element at the
 *  given position in the list (with zero referring to the first element) 
 *  or undefined when there is no such element.
 */
const nth = (list, num) =>{
    if(!list){
        return undefined;
    }
    if(num===0){
        return list.value;
    }else{
        return nth(list.rest,num-1)
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));