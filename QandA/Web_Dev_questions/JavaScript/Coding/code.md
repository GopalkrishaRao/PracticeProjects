```
for (var i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    })
}
Output: 3 3 3
```

```
for (var i=0; i<3; i++){
    (function (index){
        setTimeout(()=>{
            console.log(index);
        })
    })(i)
}

//Output :  0 1 2
```

* or Change the var to let 

#
## Get multiple values- Generators
```
function getMultipleValues(){
    return 10;
    return 20;
}

const result= getMultipleValues();
console.log(result);
//Output: 10
```

* Solution
```
function* getMultipleValues(){
    yield 10;
    yield 20;
}

const result= getMultipleValues();
console.log(result.next().value);
console.log(result.next().value);

// Output: 10 20
```

#
## Sum of number
```
function sum(...args){
    let total=0;
    for(num of args){
        total+=num
    }
    return total
}

console.log(sum(1,2,3,4));
```