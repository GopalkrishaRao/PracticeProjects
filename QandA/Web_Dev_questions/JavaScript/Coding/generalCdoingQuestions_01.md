* find the maximum number in an array.

Method: 1 
```
let numbers=[1,2,3,4,5,6,5,7];

function max(a){
    return Math.max(...a)
}

console.log(max(numbers)); //7

```
Method: 2
```
function max(a){
    let largest=0;
    for (let i=0; i<a.length; i++){
        if(a[i]>=largest){
            largest=a[i]
        }
    } 
    return largest
}
```

#
* Check the givn string / numbr is pallendrome?
Method:1
```
function isPalendrom(a){
    if(typeof(a)==="number"){
        a=a.toString()
    }
    if(a.split("").reverse().join("")===a){
        return "Pallendrom"
    }else{return "Not Palendrome"}
}

console.log(isPallendrom(121))  // Pallendrome
```
Method:2
```

function isPallendrom(a){
    if(typeof(a)==="number"){a=a.toString()}
    let b="";
    for(i=a.length-1; i>=0; i--){
        b+=a[i]
    }
    if(a===b){
        return "palendrome"
    }else{return "not palendrome"}
}

console.log(isPallendrom(121)); //palendrome
```
#
* function that takes an array of numbers and returns a new array with only the even numbers. 


```
let a=[1,2,3,4]
function even(a){
    return a.filter(num=>num%2===0)
}

console.log(even(a));
```
* Method:2
```
function even(a){
    let evenArr=[]
    for(i=0; i<a.length; i++){
        if (a[i]%2===0){
            evenArr.push(a[i])
        }
    }
    return evenArr
}
```

#
*  factorial of a given number. 
```
function facctorial(a){
    if(a===0 || a===1){
        return 1
    }
    return a*facctorial(a-1)
}
console.log(facctorial(4)); // 24
```

#
* Remove duplicate from array

* Method: 1
```
function removeDuplicate(a){
   let uniqueArray=[];
   for(let i=0; i<a.length; i++){
    if(uniqueArray.includes(a[i])===false){
        uniqueArray.push(a[i])
    }
   }
   return uniqueArray
}

console.log(removeDuplicate([1,2,2,3,1,4]));

```

* Method: 2
```
function removeDuplicate(a){
   return [...new Set(a)]
}

```

#
* Check anogrom

```
function checkAnogram(a,b){
    return a.split("").sort().join("")===b.split("").sort().join("")
};

console.log(checkAnogram("as", "sa"));

```

#
* Number of voles in the string
```
function noOfVowels(a) {
    let n = 0;
    for (let letter of a.toLowerCase()) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            n += 1;
        }
    }
    return n;
}

console.log(noOfVowels("Hi"));

```

#
* Find the largest number in a array
```
function largestNumber(a){
    let max=a[0];
    for(nums of a){
        if(nums>max){
            max=nums
        }
    }
    return max
}
console.log(largestNumber([1,5,6]));
```

#
* Remove space from the string
```
function removeSpace(a){
    let newString=""
    for(letters of a){
        if (letters!==" "){
            newString+=letters
        }
    }
    return newString
}

console.log(removeSpace("remvoe space from the senctance"));
```
* Method 2
```
function removeSpace(a){
    return a.split("").filter((let)=>let!==" ").join("")
}
```