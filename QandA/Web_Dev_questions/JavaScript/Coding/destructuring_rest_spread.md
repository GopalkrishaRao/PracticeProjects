
#
## Extract 'name' 'street' and 'city' from the address object using destructuring.
```
const user = {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'Wonderland',
      country: 'Fictionland'
    }
  };
  
  const {name, address:{street, city}}= user;

  console.log(name, street, city);
```
* or
 ```
const {name, address}= user;
  const {street, city}=address;
```

#
## Use destructuring to assign default values for 'height' and 'weight'.

```

const person = { name: 'Bob', age: 30 };

const {name, age, height=140, weight=60}=person;

console.log(height, weight, person);

// 140 60 { name: 'Bob', age: 30 }
```

#
## Skip the first two elements and extract the rest using array destructuring.
```
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

const [a, b, ...rest]=fruits;

console.log(a);
//Apple

console.log(rest);  
//[ 'Orange', 'Mango' ]

console.log(...rest);
//Orange Mango
```

#
## Extract 'name', 'age', and the first skill from the user object using destructuring.
```
const user = {
    name: 'Eve',
    age: 28,
    skills: ['JavaScript', 'React', 'CSS']
  };

  const {name, age, skills:[a, ...rest]}= user
  console.log(name, a);
  //Eve, JavaScript
```

#
## Rename the variables to 'fullName' and 'years' using destructuring.
```
const person = { name: 'Sam', age: 35, occupation: 'Designer' };

const {name:fullName, age:years}=person
console.log(fullName, years);
// Sam, 35
```

#
##  Use array destructuring to swap the values of 'a' and 'b'.

```
let a = 5;
let b = 10;
[a,b]=[b,a]
console.log(a,b);
```

#
## Extract 'name', 'subject', and the first  hobbies using array destructuring.
```
const student = ['Alice', 'Math', ['Reading', 'Swimming', 'Coding']];

const [name, subject, [a,b,...rest]]=student;
console.log(name, a);

// Alice Reading
```