#
## Ojbect
* 
* JavaScript methods are actions that can be performed on objects.
#

## [JavaScript Object Properties](https://www.w3schools.com/js/js_object_properties.asp)



* The delete keyword deletes a property from an object:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
```

* The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

#
## [Call]():
 * The call method is a function method in JavaScript that allows you to invoke a function with a specified this value and arguments provided individually.

```
function greet(name) {
  console.log(`Hello, ${name}! Welcome to the chat.`);
}

greet.call(this, 'John');
```

#
## [Apply]():
* The apply method is similar to call, but it accepts arguments as an array-like object instead of individual arguments.
```
function greet(name) {
  console.log(`Hello, ${name}! Welcome to the chat.`);
}

greet.apply(this, ['John']);
```
#
## [Bind]():
* The bind method creates a new function that, when called, has a fixed this value and can optionally have preset arguments.
```
function greet(name) {
  console.log(`Hello, ${name}! Welcome to the chat.`);
}

var greetJohn = greet.bind(this, 'John');
greetJohn();
```

#
## [Js Objects and its Methods](https://gkrao.hashnode.dev/javascript-object-and-its-methods)

#
## [Date object](https://www.w3schools.com/js/js_dates.asp):
* Date objects are static. The "clock" is not "running".
* The computer clock is ticking, date objects are not.
*  JS use browser's time zone and display a date as a full text string
* created with the `new Date()` constructor.
* `new Date(year, month, ...)` creates a date object with a specified date and time.
```
let d = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d):
//Output: Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
```

* 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

* JavaScript counts months from 0 to 11:

* JavaScript stores dates as number of milliseconds since January 01, 1970.