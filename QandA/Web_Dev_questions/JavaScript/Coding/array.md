#
## Merge array

```
let a = [1,2,3,4];
let b = ["a","b","c","d","e"];

//Using spread
console.log([...a,...b]);

//Using concat
console.log(a.concat(b));
```
#
## Remove index
```
let arr=[0,1,2,3]
function removeElement(arr, index) {
    let newArr=[]
    for (let i=0; i<arr.length; i++){
        if(i===index) continue
        newArr.push(arr[i])
    }
    return newArr
  }
  
  console.log(removeElement(arr, 2));


  // Using spread operator

  function removeElement(arr, index) {
    return ([...arr.slice(0,index), ...arr.slice(index+1)])
  }
```