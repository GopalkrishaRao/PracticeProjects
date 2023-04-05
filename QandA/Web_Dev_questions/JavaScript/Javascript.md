## [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):
* single-threaded, dynamic, scripting language used for

## Variable
*  A value that can change, depending on conditions or on information passed to the program.
#
## [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* The process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
* In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

``` 
carName = "Volvo";
let carName;

// This will result in a ReferenceError:

carName = "Volvo";
const carName;
// Syntax error

carName = "Volvo";
console.log(carName);
var carName;
// Volvo

console.log(carName);
carName = "Volvo";
var carName;
//undefined
```

## Data types in JS
1. [Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
    (7) : 
* In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.  
    * string.
    * number.
    * bigint.
    * boolean.
    * undefined.
    * symbol.
    * null.
2. Non-Primitive / Object Data Type:
    * Array
    * Ojbect
    #
## [Not a Number [NAN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN):
* NaN is a number that is not a legal number.
```
typeof(NaN)
//number
```
#
## [Truthy value](https://developer.mozilla.org/en-US/docs/Glossary/Truthy): 
* Returns ***true*** when encountered in a Boolean context.
* Example: true, 1

#
## [Falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy):
* Returns ***false*** when encountered in a Boolean context.
* Example:  0, null, NaN, undefined, false, "  " (empty sting)
#
##  [Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion): 
* Js predicts and assume value automatically.
* The automatic or implicit conversion of values from one data type to another
```
5+"5"                    //55
5-"5"                    //0
true+5                   //6
false+5                  //5
```
#

## [Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
```
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

```
