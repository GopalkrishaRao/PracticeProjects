#
## Reduce mehtod
* `arr.reduce((accumilator, currVal, index, array)=>{return },initalVal)`
* inside take 4 parameter
* First is accumilator, second is the actual item, third is the index and fourth is the actual array itself
#
## Sum of Array Elements:
```
const ab=[1,2,3,4,5];

const total = ab.reduce((total,number)=>{
    return total=total+number
},0);
console.log(total);
// Output 15
```

#
## Product of elements
```
const ab=[1,2,3,4,5];

const total = ab.reduce((total,number,index, array)=>{
    return total=array[index]*total
},1);
console.log(total);
```
* or 
```
const total = ab.reduce((total,number,)=>{
    return total=numb*total
},1);
```

#
## Flatten an Array:
```
let a=[1, [2, 3], [4, 5]]
const result = a.reduce((accu, val)=>{
    return accu.concat(val)
},[]);

console.log(result);
//Output : [1,2,3,4,5]
```

#
## Counting Occurrences:
* Function that counts the occurrences of each element in an array and returns an object with the counts. 
```
const a=[1,2,3,4,5,5,1,1,2,];
let res=a.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  console.log(res);

  // Output: { '1': 3, '2': 2, '3': 1, '4': 1, '5': 2 }
```

or
```
let res = a.reduce((acc, current) => {
  if (acc[current] === undefined) {
    acc[current] = 1;
  } else {
    acc[current] += 1;
  }
  return acc;
}, {});

console.log(res);
```
# 
## Finding max
```
const array = [1, 2, 3, 4, 5, 1, 20, 3, -4, 1];

const result=array.reduce((acc, current)=>{
  return  Math.max(acc, current)
},[])

console.log(result); //20
```

## Finding min
```
const array = [1, 2, 3, 4, 5, 1, 20, 3, -4, 1];

const result=array.reduce((acc, current)=>{
  return  Math.min(acc, current)
},[])

console.log(result); //-4
```

# 
## Average
```
const array = [5, 2, 8, 1, 9];
const sum = array.reduce((acc, current) => acc + current, 0);
const average = sum / array.length;
console.log("Average value:", average);
```

#
## Remove duplicate
```
const array = [1, 2, 3, 1, 2, 4, 5];

const uniqe=array.reduce((accu, current)=>{
    if(!accu.includes(current)){
        accu.push(current)
    };
    return accu
},[])

console.log(uniqe); 
//[ 1, 2, 3, 4, 5 ]
```

#
## Reversing the Array

* **reduceRight** mehtod should be used or use unshift insted of push
```
const array = [1, 2, 3, 4, 5];

const reverse=array.reduceRight((accu, current)=>{
    accu.push(current);
    return accu
},[])

console.log(reverse);
```

