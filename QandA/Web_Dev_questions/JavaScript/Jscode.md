```
var x = 5
var y = new Number(5)
var z = new Number(5)

console.log(typeof(x))     //number
console.log(typeof(y))    // object
console.log(x==z);       //true
console.log(y==z);      // false (objects can not be compared)

console.log(z===y);     // false
```
#
```
console.log(5+6+"8");      // 118
console.log("5"+6+8);     // 568
console.log(5+"6"+8);     // 568
```
#