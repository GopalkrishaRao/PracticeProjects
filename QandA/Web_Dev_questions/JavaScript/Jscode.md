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
## Array flattingin

```
let arr = [
  [1,2],
  [3,4],
  [5,[6,7],8],
  [8,9]
]

<!-- Method 1 -->

let flattendArr= [].concat(...arr)
console.log(flattendArr)



<!-- Method 2 -->

console.log(arr.flat(Infinity))



<!-- Method 3 Recursion -->

function customFlat(arr, depth=1){
  let result=[];
  arr.forEach(ar => {
    if(Array.isArray(ar) && depth>0){
      result.push(...customFlat(ar, depth-1))
    }
    else{
      result.push(ar);
    }
  });
  return result;
}

console.log(customFlat(arr, Infinity));

```



#
## What is the output?

```
function a(){
  for(var i=0; i<3; i++ ){
    setTimeout(()=>console.log(i), i*1000)   
  }
}

a() // 333



<!-- method 2  -->

* use let to get 0 1 2 


<!-- method 3 -->
function a() {
  for (var i = 0; i < 3; i++) {
    // Create a new function with i as a parameter using an IIFE (Immediately Invoked Function Expression)
    (function (num) {
      setTimeout(() => console.log(num), num * 1000);
    })(i + 1);
  }
}

a();
```

#
## call():
```
let person = {
  name: "GK",
  hello : function (thing){
    console.log(this.name + ` says hello `+ thing);
  },
};

person.hello("first call")  
//GK says hello first call

let pesonB = {
  name: 'Rao'

}

person.hello.call(pesonB, "this is secoend call")
// Rao says hello this is secoend call
```

#
## apply()
```
let person = {
  name: "GK",
  hello : function (thing){
    console.log(this.name + ` says hello `+ thing);
  },
};

person.hello("first apply")
// GK says hello first apply


let pesonB = {
  name: 'Rao'

}

person.hello.apply(pesonB, ["this is secoend apply"])
// Rao says hello this is secoend apply
```

#
## bind()
```
let person = {
  name: "GK",
  hello : function (thing){
    console.log(this.name + ` says hello `+ thing);
  },
};

person.hello("first bind")
// GK says hello first bind


let pesonB = {
  name: 'Rao'

}

let newPerson = person.hello.bind(pesonB)
newPerson("secoend bind")
// Rao says hello this is secoend bind
```