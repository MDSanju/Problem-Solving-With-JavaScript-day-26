// replace first value to second value and second value to first value
var first = 15;
var second = 21;
var temp = first;
first = second;
second = temp;

console.log(first, second);



// another way to do that, it's called (destructuring)
var best = 3;
var good = 5;

[best, good] = [good, best];
console.log(best, good);