
#
## [String Methods](https://www.w3schools.com/js/js_string_methods.asp)
* String length
* String slice()
* String substring()
* String substr()
* String replace()
* String replaceAll()
* String toUpperCase()
* String toLowerCase()
* String concat()
* String trim()
* String trimStart()
* String trimEnd()
* String padStart()
* String padEnd()
* String charAt()
* String charCodeAt()
* String split()


# [String Search](https://www.w3schools.com/js/js_string_search.asp)
* String indexOf()
* String lastIndexOf()
* String search()
* String match()
* String matchAll()
* String includes()
* String startsWith()
* String endsWith()


* All string methods return a new string. They don't modify the original string.

* Strings are immutable: Strings cannot be changed, only replaced.


#
* **String length**: 
The length data property of a string contains the length of the string in UTF-16 code units.


* **String replace():**  replaces a specified value with another value in a string
    * The replace() method does not change the string it is called on.
    * The replace() method returns a new string.
    * The replace() method replaces only the first match
    * replace() method is case sensitive

```
let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "Google"));       //Please visit Google!
console.log(text);       //Please visit Microsoft!

```


* **String replaceAll():**
    * method allows you to specify a regular expression instead of a string to be replaced.
    * replaceAll() is an ES2021 feature.
* **String toUpperCase():**
    A string is converted to upper case with toUpperCase()
* **String toLowerCase():** A string is converted to lower case with toLowerCase():
* **String concat():** 
* joins two or more strings
* concat() method can be used instead of the plus operator.
```
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));             //Hello World
console.log(text1 +" "+  text2);             //Hello World
```

* **String trim():** The trim() method removes whitespace from both sides of a string
* **String trimStart():**
    * removes whitespace only from the start of a string.
* **String trimEnd():** removes whitespace only from the end of a string.

* **String padStart():**
* **String padEnd():**
* **String charAt():** returns the character at a specified index (position) in a string
* **String charCodeAt():** returns the unicode of the character at a specified index in a string:

* **String split():**
#
## Extracting String Parts : 3 methods
* **slice(start, end)**: slice() extracts a part of a string and returns the extracted part in a new string.
  * The method takes 2 parameters: start position, and end position (end not included).

```  
  let text = "Apple, Banana, Kiwi";

 console.log(text.slice(7,13))                 // Banana
 console.log(text.slice(7))                  // Banana, Kiwi
console.log(text.slice(-12))                 // Banana, Kiwi
console.log(text.slice(-12,-6))                // Banana
 ```
 
* **substring(start, end):** substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
```
let str = "Apple, Banana, Kiwi";
console.log(text.substring(7,13))                // Banana
console.log(text.substring(7))                  // Banana, Kiwi
```

* **substr(start, length):** substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
```
console.log(text.substr(7,6))                // Banana
console.log(text.substr(7))                  // Banana, Kiwi
```

#

## Property Access:
* ECMAScript 5 (2009) allows property access [ ] on strings:
* It makes strings look like arrays (but they are not)
* If no character is found, [ ] returns undefined, while charAt() returns an empty string.
* It is read only. str[0] = "A" gives no error (but does not work!)

```
let text = "HELLO WORLD";
let char = text[0];       //H


let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
```

#
## split():
* A string can be converted to an array with the split() method

```
let text = "abcdefghijk";

console.log(text.split());       //[ 'abcdefghijk' ]

console.log(text.split(''));     //[
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'i', 'j', 'k'
]

console.log(text.split('',3));     //[ 'a', 'b', 'c' ]

console.log(text.split('d'));     //[ 'abc', 'efghijk' ]
```
#
## String concat():

#
## String constructor
#
## endsWith()
#
## includes()
#
## indexOf()
#
## lastIndexOf()
#
## length
#
## match()
#
## repeat()
#
## search()
#
## startsWith()
#
## toString()
#
## trim()
#
## valueOf()
#
## splice()
