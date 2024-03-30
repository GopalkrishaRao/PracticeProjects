# Map
 
 #
 ## Doubling Numbers:
 ```
 const num=[1,2,3,4,5];
const result=num.map((number)=>{
    return number*2
})
console.log(result);
```
#
## Capitalizing Strings:
```
const fruits=["apple", "banana", "orange", "grape", "strawberry"];

const result=fruits.map((fruit)=>{
    return fruit.toUpperCase();
})
console.log(result);
```

#
## Extracting First Names:
```
const names=[
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Alice', lastName: 'Doe' }
];

const result=names.map((name)=>{
    return name.firstName
})
console.log(result);
```

#
## Calculating Areas:
```
const rectangles = [
    { width: 4, height: 5 },
    { width: 3, height: 7 },
    { width: 6, height: 2 },
    { width: 2, height: 9 },
    { width: 8, height: 3 }
];


const result=rectangles.map((area)=>{
    return area.width*area.height
})
console.log(result);
```

#
## Transforming Object Properties:
* return a new array where each object has 'label' and 'value' properties instead.
```
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 20 }
];


const result=people.map((obj)=>{
    return {
            lable:obj.name,
            value:obj.age
            }
})
console.log(result);

// 
[
  { lable: 'Alice', value: 30 },
  { lable: 'Bob', value: 25 },
  { lable: 'Charlie', value: 40 },
  { lable: 'David', value: 35 },
  { lable: 'Eve', value: 20 }
]
```