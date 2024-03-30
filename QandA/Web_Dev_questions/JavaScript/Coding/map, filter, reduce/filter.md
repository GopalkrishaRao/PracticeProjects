#
## Filtering Even Numbers:
```
const num=[0,1,2,3,4,5,6];

const result=num.filter((number)=>{
    return number%2===0
})

console.log(result); 
// [ 0, 2, 4, 6 ]
```

#
## Filtering Strings Longer Than a Given Length:
```
const strings = ["apple", "banana", "orange", "grapefruit"];

const result = strings.filter((str)=>{
    return str.length<=5
});

console.log(result);
```


#
## Filtering Objects by Property Value:

* using map to get only name withoutou it the reslult will be object
```
const products = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
    { name: "grapefruit", price: 5 }
];

const result = products.filter(item=>{
    return item.price<=3;
}).map(item=>item.name)

console.log(result);
// [ 'apple', 'banana', 'orange' ]
```