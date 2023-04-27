## [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):
* Single-threaded, dynamic, scripting language used for implementing complex features on web pages.

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
## [Not a Number (NAN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN):
* NaN is a number that is not a legal number.

```
typeof(NaN)
//number
```
#
## [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined):
* The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.
#
## [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null):
* The null value represents the intentional absence of any object value.
* You can empty the variable by setting the value to null.
#
## [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval):
* The eval() function evaluates JavaScript code represented as a string and returns its completion value.
```
console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false
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
## [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures):

* An inner function that has access to the outer or enclosing function’s variables.
* A closure gives you access to an outer function's scope from an inner function
``` 
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8

```

#
## [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope):
*  In JavaScript, scope refers to the  **visibility and accessibility** of variables and functions in different parts of a program.

# 
## [Global Scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope):
* Global scope refers to variables and functions that are accessible from anywhere in the program. 
* When a variable or function is declared outside of any function or block of code, it is placed in the global scope.
*  Variables and functions in the global scope can be accessed from any part of the program, including other functions.

# 
## [Local Scope](https://developer.mozilla.org/en-US/docs/Glossary/Local_scope):
* Local scope refers to variables and functions that are accessible only within a particular function or block of code. 
* When a variable or function is declared inside a function or block of code, it is placed in the local scope. 
* Variables and functions in the local scope can be accessed only within the function or block of code where they are declared.


```
let x = 5; // Global variable

function foo() {
  let y = 10; // Local variable
  console.log(x); // Output: 5
  console.log(y); // Output: 10
}

foo();

console.log(x); // Output: 5
console.log(y); // Output: Uncaught ReferenceError: y is not defined

```
#
## [Lexical Scope]():
* Lexical scope is the definition area of an expression. It is the area upto which the variables and functions created are visible and accessible.

* In JavaScript, lexical scope refers to the visibility and accessibility of variables and functions within nested functions.

*  In other words, an item's lexical scope is the place in which the item got created.

* The lexical scope is determined by the placement of functions and variables in the code at the time the code is written, and it cannot be changed dynamically during runtime.

* When a function is defined inside another function, the inner function has access to variables defined in the outer function, as well as variables defined in the global scope. However, variables defined inside an inner function are not accessible in the outer function or global scope.
```
function outerFunction() {
  const outerVar = 'I am in the outer function';
  
  function innerFunction() {
    const innerVar = 'I am in the inner function';

    console.log(outerVar); 
    // accessible because it's in the outer scope

    console.log(innerVar); 
    // accessible because it's in the same scope
  }
  
  innerFunction();
  console.log(innerVar); 
  // not accessible because it's in the inner scope only
}

outerFunction();

```
#
## [Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
* The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

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
## [prototype]():
* Prototypes are the mechanism by which JavaScript objects inherit features from one another.

#
## [ __ proto __ ]():
* (pronounced "dunder proto") is a property of every object in JavaScript that refers to the object's prototype. In other words, it is a reference to the object's parent prototype object. The prototype object is an object that provides shared properties and methods for other objects to inherit.



# 
## Difference between prototype and proto
| Prototype | Proto |
|-----------|-------|
| Prototypes is a simple way to share behavior and data between multiple objects access using `.prototype`. | Proto is also a way to share behavior and data between multiple objects access using `__proto__`. |
| All the object constructors (function) have prototype properties. | All the objects have proto property. |
| The prototype gives access to the prototype of function using function. Syntax: `(function.prototype)` | Proto gives access to the prototype of the function using the object. Syntax: `(object.__proto__)` |
| It is mostly used to resolve issues of memory wastage when creating an object in constructor mode then each object has separate behavior. | It is used in the lookup chain to resolve methods, constructors, etc. |
| It is the property of the class. | It is the property of the instance of that class. |
| The prototype property is set to function when it is declared. All the functions have a prototype property. | Proto property that is set to an object when it is created using a new keyword. All objects behavior newly created have proto properties. |
| It is introduced in EcmaScript 6. | It is introduced in ECMAScript 5. |
| It is also called it as `.prototype`. | It is also called dunder proto. |
| It is mostly used in JavaScript. | It is rarely used in JavaScript. |

#
## [Prototype chaining](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes):

* Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


* Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based languages like C++ and Java

#
## [Temporal Dead Zone (TDZ)]()
* A behavior in JavaScript that occurs when a variable is accessed before it is declared with let or const , but not with var.  During the TDZ, accessing the variable will result in a ReferenceError.

* (for variable decleared with var it retturns **undefined**)


```
console.log(myVar); // ReferenceError: myVar is not defined

let myVar = "Hello, world!";



console.log(myVar); // undefined
var myVar = "Hello, world!";
```
#
## [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
* Promise is an object that represents a value that may not be available yet but will be at some point in the future. 
* Promises are used to handle asynchronous operations, such as network requests or file I/O, where the result may not be immediately available.

* A Promise can be in one of three states:
  1. Pending: The initial state, before the Promise has resolved or been rejected.
  2.  Resolved: The Promise has completed successfully and has a result value.
  3. Rejected: The Promise has failed and has an error value.
* A Promise is created with the new Promise() constructor, which takes a function as its argument.
*  This function, called the executor function, has two parameters: resolve and reject.
* resolve is a function that is called when the Promise is resolved successfully, and reject is a function that is called when the Promise is rejected.
#
## [Promise Chaining]()
* The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.
* Promise chaining is a powerful technique that can simplify complex asynchronous code and make it more readable and maintainable.

* Promise chaining is a technique used in JavaScript to handle asynchronous operations. It involves creating a chain of promises, each of which performs a specific task and returns a promise object. The next promise in the chain is then executed when the previous promise is resolved, allowing for a sequence of asynchronous tasks to be performed in a synchronous-looking manner.

* To implement promise chaining, you can use the then method on the promise object to attach a callback function that will be executed when the promise is resolved. This callback function can return a new promise, which can then be used to continue the chain. Here's an example:
```
doTask1()
  .then(function(result1) {
    // Do something with result1
    return doTask2();
  })
  .then(function(result2) {
    // Do something with result2
    return doTask3();
  })
  .then(function(result3) {
    // Do something with result3
  })
  .catch(function(error) {
    // Handle any errors that occurred in the chain
  });

```
* In this example, doTask1, doTask2, and doTask3 are functions that return promises. The first then block is attached to the promise returned by doTask1. When doTask1 is resolved, the callback function is executed and doTask2 is called. The same pattern repeats for the remaining tasks.

* If any promise in the chain is rejected, the control jumps to the nearest catch block, allowing you to handle the error appropriately.
#
## [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining):


#
## [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies):
* Cookies are small pieces of data that are stored on the client-side (i.e., the user's web browser) 
* Thye are used to store user-specific information, such as login credentials or shopping cart contents.
* In JavaScript, cookies can be created and managed using the document.cookie property. 
```
document.cookie = "name=value; expires=date; path=path; domain=domain; secure";

```
#
## [Local Storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local):
* Local storage stores data with no expiration date

#
## [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage):
* Stores data for a single browsing session. When the user closes their browser, the data is deleted.
*  This makes it ideal for storing temporary data that should not be saved between sessions, such as a user's current session state or the contents of a form that the user is filling out. 

#
##  [Event Bubbling]():
* A behavior in JavaScript where when an event is triggered on an element, the event propagates through the DOM tree and triggers the same event on each of its ancestor elements. 
* This means that if you have nested elements, such as a `<div>` inside another `<div>`, and you click on the inner `<div>`, the click event will first trigger on the inner `<div>`, then on the outer `<div>`, and so on, all the way up to the `<body>` and `<html>` elements.
* Event bubbling is the default behavior in JavaScript, but you can use the stopPropagation() method to prevent the event from propagating further up the DOM tree. For example:
```
document.getElementById("innerDiv").addEventListener("click", function(event) {
  console.log("Clicked on inner div");
  event.stopPropagation();
});

document.getElementById("outerDiv").addEventListener("click", function() {
  console.log("Clicked on outer div");
});

```
* In this example, we have two nested `<div>` elements, with the innerDiv inside the outerDiv. We attach a click event listener to both elements. When the innerDiv is clicked, its callback function is executed first, and the message "Clicked on inner div" is logged to the console. The stopPropagation() method is then called on the event object, preventing the event from propagating any further. Therefore, the click event on the outerDiv is not triggered, and the message "Clicked on outer div" is not logged to the console.

* Event bubbling can be useful in certain situations, such as when you want to handle an event on multiple elements with a single event listener. However, it can also cause unintended consequences, such as triggering unwanted event listeners on ancestor elements. It's important to be aware of this behavior and use the stopPropagation() method when necessary to prevent unexpected results.

#
## [Event Capturing]():
* Event capturing is another event propagation mechanism in JavaScript, and it works the opposite way of event bubbling. In event capturing, the event starts at the top level of the DOM tree (the `<html>` element), and moves down through the DOM tree to the element that triggered the event. This means that if you have nested elements, such as a `<div> `inside another `<div>`, and you click on the inner `<div>`, the click event will first trigger on the `<html>` element, then on the outer `<div>`, and finally on the inner `<div>`.

* To register an event listener that uses event capturing, you can pass a third parameter to the addEventListener() method, specifying true for the useCapture option. For example:
```
document.getElementById("outerDiv").addEventListener("click", function() {
  console.log("Clicked on outer div (capturing)");
}, true);

document.getElementById("innerDiv").addEventListener("click", function() {
  console.log("Clicked on inner div (capturing)");
}, true);

```
* In this example, we have two nested `<div>` elements, with the innerDiv inside the outerDiv. We attach a click event listener to both elements, with the useCapture option set to true. When the innerDiv is clicked, the callback function for the outerDiv is executed first, and the message "Clicked on outer div (capturing)" is logged to the console. Then, the callback function for the innerDiv is executed, and the message "Clicked on inner div (capturing)" is logged to the console.

* Event capturing is less commonly used than event bubbling, but it can be useful in certain situations, such as when you need to intercept an event before it reaches its target element. It's important to note that if you use event capturing and event bubbling on the same element, the event capturing handlers will be executed before the event bubbling handlers.

#
## What is the difference between document load and DOMContentLoaded events?
* The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. 

* Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).
#
## What is the difference between an attribute and a property?
* Attributes are defined on the HTML markup whereas properties are defined on the DOM.
* An attribute is a value that is specified in the HTML markup and is used to initialize an element when the page is loaded. Attributes are defined in the opening tag of an element, and can be set to any valid value, including strings, numbers, and Boolean values. Examples of attributes include id, class, href, src, and style. Attributes are defined as strings, even if their values are numeric or boolean.
* A property, on the other hand, is a value that is stored in the DOM object of an element and reflects the current state of that element. Properties can be accessed and modified at runtime using JavaScript, and they are often used to interact with an element dynamically. Examples of properties include innerHTML, textContent, value, and checked. Properties can have any data type, including objects, arrays, functions, and more.
#
## [Pure Function](https://www.scaler.com/topics/pure-function-in-javascript/):
* A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.
```
function operationAdd(a, b){ 
    return a+b;
}

  operationAdd(2,5),
  
```
