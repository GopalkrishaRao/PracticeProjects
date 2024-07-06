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
* In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties, are immutable and can hold only single value.  
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
* The null value represents the intentional absence of any object value. It is often used to indicate that a variable intentionally has no value.
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

* A closure is the combination of a function and the lexical environment within which that function was declared

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

*  In other words, an item's lexical scope is the place in which the item got created.


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
## [Scope Chain]():
* It is feature in js which determines the order in which the interpreter looks for variables when trying to resolve a reference.
*  When a variable is accessed, JavaScript looks for it first in the current scope, then in the outer scope, and so on, until it reaches the global scope.

```
// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

```

#
## [Destructuring ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):
* Process of  unpacking values from arrays, or properties from objects, into distinct variables.
* [example](https://github.com/GopalkrishaRao/PracticeProjects/blob/main/QandA/Web_Dev_questions/JavaScript/Coding/destructuring_rest_spread.md)

#
## [prototype](https://www.youtube.com/watch?v=wstwjQ1yqWQ&t=1077s):
* Prototypes are the mechanism by which JavaScript objects inherit features from one another.
* [example](https://github.com/GopalkrishaRao/PracticeProjects/blob/main/QandA/Web_Dev_questions/JavaScript/Coding/protoPrototype.html)
#
## [ __ proto __ ](https://www.youtube.com/watch?v=wstwjQ1yqWQ&t=1077s):
* (pronounced "dunder proto") is a property of every object in JavaScript that refers to the object's prototype. In other words, it is a reference to the object's parent prototype object. The prototype object is an object that provides shared properties and methods for other objects to inherit.
* [example](https://github.com/GopalkrishaRao/PracticeProjects/blob/main/QandA/Web_Dev_questions/JavaScript/Coding/protoPrototype.html)


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
* TDZ is a term to describe the state of variables where they are not accessible. A variable declared using let & const is in TDZ from the start of the block until the initialization has completed.

*  the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

* A behavior in JavaScript that occurs when a variable is accessed before it is declared with let or const , but not with var.  During the TDZ, accessing the variable will result in a ReferenceError.

* (for variable decleared with var it retturns **undefined**)


```
console.log(myVar); // ReferenceError: myVar is not defined

let myVar = "Hello, world!";



console.log(myVar); // undefined
var myVar = "Hello, world!";
```

```
{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}
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
## [Event handling]():
* It is the process of responding to user actions in a web page

Example: on Click etc

#
##  [Event Bubbling]():
* A behavior in JavaScript where when an event is triggered on an element, the event propagates through the DOM tree and triggers the same event on each of its ancestor elements. 

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


* Event bubbling can be useful in certain situations, such as when you want to handle an event on multiple elements with a single event listener. However, it can also cause unintended consequences, such as triggering unwanted event listeners on ancestor elements. It's important to be aware of this behavior and use the stopPropagation() method when necessary to prevent unexpected results.

#
## [stopProagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation):
* The stopPropagation method is used to stop the event from bubbling up the event chain.


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


* Event capturing is less commonly used than event bubbling, but it can be useful in certain situations, such as when you need to intercept an event before it reaches its target element. It's important to note that if you use event capturing and event bubbling on the same element, the event capturing handlers will be executed before the event bubbling handlers.
#
## [Event deligation](https://javascript.info/event-delegation):
* Rather than attaching an individual event listener to each element, event delegation allows you to attach a single event listener to a higher-level ancestor element that encompasses all the target elements.
* [example for event bubbling, capturing, deligation](https://www.youtube.com/watch?v=rS_4YfbEo2U)

#
## What is the difference between document load and DOMContentLoaded events?
* The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. 

* Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).p
#
## What is the difference between an attribute and a property?
* Attributes are defined on the HTML markup whereas properties are defined on the DOM.
* An attribute is a value that is specified in the HTML markup and is used to initialize an element when the page is loaded. Attributes are defined in the opening tag of an element, and can be set to any valid value, including strings, numbers, and Boolean values. Examples of attributes include id, class, href, src, and style. Attributes are defined as strings, even if their values are numeric or boolean.
* A property, on the other hand, is a value that is stored in the DOM object of an element and reflects the current state of that element. Properties can be accessed and modified at runtime using JavaScript, and they are often used to interact with an element dynamically. Examples of properties include innerHTML, textContent, value, and checked. Properties can have any data type, including objects, arrays, functions, and more.

#
## [Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking):
* Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

#
## [Minification](https://developer.mozilla.org/en-US/docs/Glossary/Minification):
* Process of minimizing code and markup in your web pages and script files by removing unnecessary or redundant data without affecting how a resource is processed by the browser.

* It's one of the main methods used to reduce load times and bandwidth usage on websites.


#
## Shallow Copay:
* Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

#
## Deep Copay:
* A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.


#
## [Events](https://www.w3schools.com/js/js_events.asp):
* In JavaScript, events are actions or occurrences that happen in the browser or on a web page, such as a button click, mouse movement, keypress, page load, or form submission. 
* Events allow JavaScript code to respond to user interactions and trigger specific actions or functions when certain events occur.

#
## [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):
* Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.


#
## [Interpolation]():
* the process of inserting strings or values into an existing string for various purposes. 
```
const name = 'John';
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

#
## [JSON](https://www.w3schools.com/js/js_json_intro.asp):
* JSON stands for JavaScript Object Notation

* JSON is a text format for storing and transporting data
* JSON format is text only.
```
'{"name":"John", "age":30, "car":null}'
```

* When sending data to a web server, the data has to be a string.

* Convert a JavaScript object into a string with **`JSON.stringify()`**
* When receiving data from a web server, the data is always a string.  **`JSON.parse()`**, make data a JavaScript object.


#
## [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps):
 a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices.


#
## [Asynchronous ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing):
* Functions running in parallel with other functions are called asynchronous.

 #
 ## [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
* Pending, Fulfilled, Rejected are the three states of promise
* Promise.then() takes two arguments, a callback for success and another for failure.

 #
 ## [Promise chaining]()

 #
 ## [async await](https://www.w3schools.com/js/js_async.asp):
 * async and await make promises easier to write

* The keyword async before a function makes the function return a promise

* The await  makes the function pause the execution and wait for a resolved promise before it continues


#
## [API]():
* It is a set of rules and protocols that allows different software applications to communicate and interact with each other. 


#
## [Execution context ](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=The%20Execution%20Context%20contains%20the,and%20the%20code%20gets%20executed.):
* Refers to the environment in which a piece of code is executed. 
* It consists of the variables, functions, and other resources that are available during the execution of the code.
* plays a crucial role in determining how the code behaves and what values are accessible at a given point in time
* each time a function is invoked, a new execution context is created.
* The execution context is responsible for managing the scope of variables and resolving references to variables and functions.

# 
## [Call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack):
* used by programming languages to keep track of function calls and their execution order.
* The call stack operates on a Last-In-First-Out (LIFO) principle
* As functions complete their execution, their execution contexts are removed from the top of the call stack, and the control flow returns to the function that called them. 
* This process continues until the stack is empty, indicating that the main program or the top-level script has finished executing.


#
## [Event loop]():
* An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

#
## [Callback queueu]
* Callback queueu  is where the callback function gets pushed to, and waits for the execution.
* Macro tasks include events like setTimeout, setInterval, setImmediate, I/O operations, and UI rendering.

#
## [Microtask Queue]:
* Microtask Queue is similar to the Callback Queue(macrotask queue), but  has a higher priority than the callback queue.
* Include Promise callbacks, process.nextTick (Node.js), and MutationObserver (browser environment).
*  All the callback functions coming through promises and mutation observer will go inside the microtask queue. 

#
## [Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters):
* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
```
const arr=[1,2,4,5]
function rest(a,b,...arr){
    let product = a*b
    let sum=0;
    for(arg of arr){
        sum += arg
    }
    console.log([product,sum]);
}
rest(...arr) 
// Output [2,9]

```
#
## [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):
* The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
* In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

```
const arr=[1,2,4,5]
function rest(...arr){
    let sum=0;
    for(arg of arr){
        sum += arg
    }
    console.log(sum);
}
rest(...arr)
//12
```

#
## [Debouncing]():
* Debouncing is a programming technique used to control the frequency of a function call by ensuring that it only executes after a certain amount of time has passed since the last invocation.
 * It's often used to improve performance and optimize resource usage, especially in scenarios where functions may be called rapidly and unnecessarily, leading to unnecessary processing or network requests.

 * Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoke

#
## [Throttling]():
 * Throttling is a technique used to control the rate at which a function is called to avoid excessive executions, particularly in scenarios where events can fire rapidly, such as scroll, resize, or mousemove events.

* Throttling is similar to debouncing (which we discussed earlier), but with throttling, the **function is executed at a regular interval, whereas with debouncing, the function is executed only after a quiet period**.

* Throttling can be beneficial in certain scenarios, especially when dealing with events that can be triggered rapidly and cause unnecessary resource usage or performance issues. 
* By throttling the function, you can control the frequency of its execution and optimize the overall performance of your React application.

#
## [Code Splitting]():
* a technique used in modern web development to improve the performance and reduce the initial loading time of web applications.
*  It involves breaking down a large JavaScript bundle into smaller, more manageable chunks or "split points." Instead of loading the entire application code at once, code splitting allows you to load only the necessary code for the current page or feature.

* In React, code splitting is typically achieved using dynamic imports, supported natively through ECMAScript (ES) modules or with the help of tools like Webpack or React's built-in React.lazy and Suspense API.

#
## [Currying](https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more):
* It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 

```

function area(l){
            return function(b){
                return function (h){
                    return l*b*h
                }
            }
        }
    
    console.log(area(1)(2)(3));
    
    //Output:6
```
```
 //If there are multiple argumets
         function add (a){
    return function (b){
         if (b) return add(a+b)
         return a
     }
 }
 console.log(add(1)(2)(3)()); 
```

* [Practical example](https://github.com/GopalkrishaRao/PracticeProjects/blob/main/QandA/Web_Dev_questions/JavaScript/Coding/currying.html): In changing text content

#
## [this](https://www.youtube.com/watch?v=fVXp7ZWjlO4&t=163s):
* [example](https://github.com/GopalkrishaRao/PracticeProjects/blob/main/QandA/Web_Dev_questions/JavaScript/Coding/this.html)

#
## Features of ES6
