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