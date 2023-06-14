const myObj = {
    a: 'somestring',
    b: 42,
    c: false
  };

 //A function that takes object as an arguement and returns an array of object's keys

  function grabKeys(obj){
    const keys = [];
    counter = 0;
    for(let key in obj){
        keys[counter] = key;
        counter++;
      }
    return keys;
  }

  //A function that takes object as an arguement and returns an array of object's value
  function grabValues(obj){
    const values =[];
    counter = 0;
    for(let key in obj){
        values[counter] = obj[key];
        counter++;
    }
    return values;
  }


const keys = grabKeys(myObj);
console.log(keys);
const values = grabValues(myObj);
console.log(values);