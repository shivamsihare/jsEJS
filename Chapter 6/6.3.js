/*
Sequence interface

Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.
*/
// Your code here.

function ArraySeq(inner){
  this.inner = inner;
}
ArraySeq.prototype.start = function(){
  return 0;
}
ArraySeq.prototype.next = function(index){
  return index + 1;
}
ArraySeq.prototype.end = function(){
  return this.inner.length;
}
ArraySeq.prototype.value = function(index){
  return this.inner[index];
}

function RangeSeq(start,end){
  this.myStart = start;
  this.myEnd = end;
}

RangeSeq.prototype.start = function(){
  return this.myStart;
}

RangeSeq.prototype.next = function(index){
  return index + 1;
}

RangeSeq.prototype.end = function(){
  return this.myEnd;
}

RangeSeq.prototype.value = function(index){
  return index;
}


function logFive(obj){
  for(var i = 0,j = obj.start(); i<5 && j!=obj.end(); i++,j = obj.next(j)){
  	console.log(obj.value(j));
  }
}
var a = new RangeSeq(100, 1000);
//console.log(a.start);

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104