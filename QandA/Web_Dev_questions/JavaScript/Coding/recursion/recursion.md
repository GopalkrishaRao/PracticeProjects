# Recursion

## Is power of four
```
const n=4;
const powerOfFour=(n)=>{
    if(n===1) return true;
    if(n%4!==0) return false;
    if (n<=0) return false
    return powerOfFour(n/4)
}

console.log(powerOfFour(1));
```