#
## Flatten an Array
* using spread
```
function flattenArray(arr) {
   return [].concat(...arr)
  }
  
  console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); 
  // Output: [1, 2, 3, 4, 5, 6]
```

* using reduce
```
function flattenArray(arr) {
   return arr.reduce((acc, current)=>{
    return acc.concat(current)
   },[])
  }
  
  console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
```

* using recursion
```
function flattenArray(arr) {
  return arr.reduce((flatArray, element) => {
    return flatArray.concat(Array.isArray(element) ? flattenArray(element) : element);
  }, []);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]

```