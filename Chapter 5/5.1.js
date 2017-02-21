/*Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
*/

var arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
var arr = arrays.reduce(function(current,array){
  return current.concat(array);
  //console.log(array);
  //console.log(current);
});
console.log(arr);

// → [1, 2, 3, 4, 5, 6]