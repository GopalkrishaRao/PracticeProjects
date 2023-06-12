# [Array](https://www.w3schools.com/js/js_arrays.asp)

 ## [JavaScript Array Reference]( https://www.w3schools.com/jsref/jsref_obj_array.asp)

Name	Description
* at()	Returns an indexed element of an array
* concat()	Joins arrays and returns an array with the joined arrays
constructor	Returns the function that created the Array object's prototype
* copyWithin()	Copies array elements within the array, to and from specified positions
* entries()	Returns a key/value pair Array Iteration Object
* every()	Checks if every element in an array pass a test
* fill()	Fill the elements in an array with a static value
* filter()	Creates a new array with every element in an array that pass a test
* find()	Returns the value of the first element in an array that pass a test
* findIndex()	Returns the index of the first element in an array that pass a test
* flat()	Concatenates sub-array elements
flatMap()	Maps all array elements and creates a new flat array
* forEach()	Calls a function for each array element
* from()	Creates an array from an object
* includes()	Check if an array contains the specified element
* indexOf()	Search the array for an element and returns its position
* isArray()	Checks whether an object is an array
* join()	Joins all elements of an array into a string
* keys()	Returns a Array Iteration Object, containing the keys of the original array
* lastIndexOf()	Search the array for an element, starting at the end, and returns its position
length	Sets or returns the number of elements in an array
* map()	Creates a new array with the result of calling a function for each array element
* pop()	Removes the last element of an array, and returns that element
prototype	Allows you to add properties and methods to an Array object
* push()	Adds new elements to the end of an array, and returns the new length
* reduce()	Reduce the values of an array to a single value (going left-to-right)
* reduceRight()	Reduce the values of an array to a single value (going right-to-left)
* reverse()	Reverses the order of the elements in an array
* shift()	Removes the first element of an array, and returns that element
* slice()	Selects a part of an array, and returns the new array
* some()	Checks if any of the elements in an array pass a test
* sort()	Sorts the elements of an array
* splice()	Adds/Removes elements from an array
* toString()	Converts an array to a string, and returns the result
* unshift()	Adds new elements to the beginning of an array, and returns the new length
* valueOf()	Returns the primitive value of an array

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