/*
Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

// Your code here.
function deepEqual(obj1, obj2){
  if(obj1 == null && obj2 == null){
    return true;
  }
  else if(obj1 == null || obj2 == null){
    return false;
  }
  else{
    var flag = true;
    for(var value1 in obj1){
      //console.log(typeof obj2[value1],typeof obj1[value1]);
      if(value1 in obj2 == false || typeof obj2[value1] != typeof obj1[value1]) flag = false;
      else if(typeof obj1[value1] == "object"){
        flag = deepEqual(obj1[value1],obj2[value1]);
      }
      else if(obj1[value1] != obj2[value1])flag = false;
    }
    for(var value2 in obj2){
      //console.log("Hello",value2);
      if(value2 in obj1 == false) flag = false;
    }
    return flag;
  }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true