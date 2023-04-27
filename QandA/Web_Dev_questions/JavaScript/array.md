## pop():
* The pop() method removes the last element from an array:
#
## push():
* The push() method adds a new element to an array (at the end)
#
## shift()
* The shift() method removes the first array element and "shifts" all other elements to a lower index.
#
## unshift()
* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
#
## delete():
* Using delete leaves undefined holes in the array.

So it is better to use pop() or shift() instead.

#
## concat() :
* The concat() method creates a new array by merging (concatenating) existing arrays
* The concat() method does not change the existing arrays. It always returns a new array.
* The concat() method can take any number of array arguments:
```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr1.concat(arr2, arr3);

```
#
## splice()

#
## [Arry.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from):
* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]
```

#
## [...spread operator]()