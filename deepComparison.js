
const deepEqual = (x, y) =>{
    if(x === y){
        return true;
    }

    if (typeof x !== "object" || typeof y !== "object" || x === null || y === null) {
        return false;
      }

    if(Object.keys(x).length !== Object.keys(y).length){
        return false;
    }

    for(let key of Object.keys(x)){
        if(!Object.keys(y).includes(key) || !deepEqual(x[key], y[key])){
            return false;
        }
    }
    return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true