
#
## [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function):
* The Function() constructor creates Function objects.
```
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// Expected output: 8
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

#
## [Callback Hell]():
* Callback hell is a term used to describe a situation in asynchronous programming where a large number of nested callbacks are required to execute a series of tasks. 
* It arises when you have multiple asynchronous operations that need to be performed in a specific order, and the completion of each operation depends on the completion of the previous operation.

* Callback hell can make code difficult to read, understand, and maintain. It can also lead to errors and bugs, as the nested callbacks can become difficult to manage and debug.
* Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. 


#
## [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function): 
* A functions in which treated like any other variable.
* a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

* In JavaScript, functions are treated as "first-class citizens", which means that they are treated like any other value or data type. Specifically, it means that functions can be:
 

* Stored in variables or properties
* Passed as arguments to other functions
* Returned as values from functions
* This concept is sometimes referred to as "first-class functions". Here are some examples of how this can be used:

* Storing a function in a variable:
```
const myFunc = function() {
  console.log("Hello, world!");
};

```
* Passing a function as an argument to another function:
```
function doSomething(func) {
  // do something...
  func();
}

doSomething(function() {
  console.log("Hello, world!");
});

```
* Returning a function from another function:
```
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(10)); // Output: 15

```
#
## First order function:
* A function that takes one or more arguments and/or returns a value, but does not take a function as an argument or return a function as its value. 
* In other words, a first-order function is a function that does not operate on functions themselves.
```
function add(a, b) {
  return a + b;
}

```

#
## Higher order function
* Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

#
## [IIFE(Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE):
* A JavaScript function that runs as soon as it is defined.
* The primary reason for using an IIFE is to create a new scope for variables, which helps to avoid naming conflicts and pollution of the global namespace.

```
(function() {
  // Code here
})();


(function(x, y) {
  console.log(x + y);
})(2, 3);

 // Output: 5

```

#
## [Pure Function](https://www.scaler.com/topics/pure-function-in-javascript/):
* A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function and does not have side effects (Does not manupulate values outside of scope).
```
function operationAdd(a, b){ 
    return a+b;
}

  operationAdd(2,5),
  
```
#
## Parameter:
* Variable name used during defining a function

#
## Argument:
* Value given to a function when invoked

#
## [Function Statemet or Function Decleration ]():
* A way to define a named function using the function keyword.
```
function functionName(parameters) {
  // Function body
  // Code to be executed
  // Optional return statement
}

```

#
## [Function Expression]():

*  A way to define a function by assigning it to a variable or a property. 
* It allows functions to be treated as values, which can be stored in variables, passed as arguments to other functions, or returned from other functions.

```
var functionName = function(parameters) {
  // Function body
  // Code to be executed
  // Optional return statement
};


var greet = function(name) {
  console.log("Hello, " + name + "!");
};

```

#
## [Named function]():
* A function that has a name identifier associated with it.

```
function functionName(parameters) {
  // code to be executed
}
```

#
## [Anonymous Function]():
* A function that is defined without a name. Instead of having a specific identifier,
*  Anonymous functions are also referred to as function expressions.
* It is usually assigned to a variable or used as an argument in a function call.
* They are commonly used in situations where a short, one-time function is needed.

```
// Anonymous function assigned to a variable

var greet = function(name) {
  console.log("Hello, " + name + "!");
};

// Calling the anonymous function
greet("Bob"); // Output: Hello, Bob!

```
* In this example, the function assigned to the variable greet is anonymous. It takes a name parameter and logs a greeting to the console.

#
## [Arrow Function]():
* It is a concise syntax for defining function in JS and was introduced in ES6.