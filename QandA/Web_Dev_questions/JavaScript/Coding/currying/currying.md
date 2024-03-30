# Currying


##
* normal way using bind
```
const multiply= (x,y)=>{
    return x*y
};

const multiplyByTwo= multiply.bind(this, 2);
console.log(multiplyByTwo(5)); //10

```
* currying function
```

const multiply=(x)=>{
    return function(y){
        return x*y
    }
}

const multiplyByTwo=multiply(2);
console.log(multiplyByTwo(5));
//10
```

* can also be wriing in single line as ` const multiply= x=>y=>x*y;`

#
## 
* A function which give same output for both sum(x,y) and sum(x)(y);

```
function sum(x,y){
    if(arguments.length===2){
        return x+y;
    }else{
        return function(y){
            return x+y
        }
    }
};

console.log(sum(2,3));
console.log(sum(2)(3));
```

#
## 
```
const evaluate =(operation)=>{
    switch (operation){
        case "sum":
            return a=>b=>a+b;
        case "multiply":
            return a=>b=>a*b;
        case "divide":
            return a=>b=>a/b;
        case "substract":
            return a=>b=>a-b;
        default:
            return null
        
    }
}
// console.log(evaluate("divide")(10)(5));
//  or
const add =evaluate("sum");

console.log(add(10)(5));
```

#
## Infinite Currying
```
function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }
        return a
    }
};

console.log(add(5)()); 
//5

console.log(add(5)(6)()); 
//11

console.log(add(1)(2)(3)(4)(5)());
//15
```

#
## convertion of f(a,b,c) to f(a)(b)(c)
```
function curry(func){
    return function curriedFunc(...arg){
        if (arg.length>=func.length){
            return func(...arg)
        }else{
            return function(...next){
                return curriedFunc(...arg, ...next);
            }
        }
    }
};

const sum=(a,b,c,d)=>a+b+c+d;
const totalSum=curry(sum);

console.log(totalSum(1)(2)(3)(5));
//11
```
