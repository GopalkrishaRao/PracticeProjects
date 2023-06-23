## CSS : 
* Cascading Style Sheets is the language used to style an HTML document. It escribes how HTML elements should be displayed.
# three ways to add CSS
*  External CSS: 
     * 
     * External styles are defined within the `<link>` element, inside the `<head`> section of an HTML
     * ` <link rel="stylesheet" href="mystyle.css">`
* Internal CSS: 
    * Internal styles are defined within the `<style>` element, inside the `<head>` section of an HTML.
    * An internal style sheet may be used if one single HTML page has a unique style.
* Inline CSS: 
    * An inline style may be used to apply a unique style for a single element.
    * Inline styles are defined within the "style" attribute of the relevant element:
    * `<h1 style="color:blue;text-align:center;">This is a heading</h1>`
#
## [Box Model](https://www.w3schools.com/css/css_boxmodel.asp):
* All HTML elements can be considered as boxes.
* In CSS, the term "box model" is used when talking about design and layout.
* The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 

#
## Margin vs Padding
| Code | Margin | Padding |
| --- | --- | --- |
| Definition | The outer space of an element i.e. margin is the space outside the border. | The inner space of an element i.e.padding is space inside the element’s border. |
| Allowed Values | It can be negative or any float number. | It does not allow negative values. |
| Setting to "auto" | We can set the margin to auto. | We cannot set the padding to auto. |
| Styling Effects | Styling of an element such as background color does not affect the margin. | Padding is affected by the styling of an element, such as background color. |



#
## Block Level  vs Inline Elements
| Block Level Elements   |      Inline Elements      |
|----------|:-------------:|
| Always starts on a new line and takes up the full width available | oes not start on a new line and only takes up as much width as necessary |
| ` <div>  <h1> - <h6>  <p>   <form> <header>        < footer>  <section>` |    `<span>  <a> <img>` |

#
##  Display:none Visibility :Hidden
 | Display:none | Visibility :Hidden |
 |----------|:-------------:|
 | Commonly used with JavaScript to hide and show elements without deleting and recreating them.| The element will be hidden, and the page will be displayed as if the element is not there|
 |The element will free up the space and allows other elemetns to occupy its space|The element will still take up the same space as before and does not allow other elements to occupty its space|

 #
 ## [CSS Position](https://www.w3schools.com/css/css_positioning.asp):
1. static :  (Default value)
2. relative
3. fixed
4. absolute
5. sticky

#
## [z-index](https://www.w3schools.com/css/css_z-index.asp)
* The z-index property specifies the stack order of an element.
* If two positioned elements overlap each other without a z-index specified, the element defined last in the HTML code will be shown on top.
#
## [Overflow](https://www.w3schools.com/css/css_overflow.asp):
*  overflow property controls what happens to content that is too big to fit into an area.

#
## Pseudo-class vs Pseudo-elements
|Pseudo-class| Pseudo-elements|
 |----------|:-------------:|
|used to define a special state of an element.| pseudo-element is used to style specified parts of an element.|
|`:active :hover :visited  :link`|` ::selection  ::marker ::after ::before ::first-letter ::first-line` |

#
## [opacity](https://www.w3schools.com/css/css_image_transparency.asp):
* The opacity property specifies the transparency of an element.
* It  can take a value from 0.0 - 1.0. The lower the value, the more transparent

#
## [CSS Variables](https://www.w3schools.com/css/css3_variables.asp):
* The var() function is used to insert the value of a CSS variable.
* Styntax:  
 `var(--name, value)`
 * `name` The variable name (must start with two dashes)
 * `value`	Optional. The fallback value (used if the variable is not found)
 * To create a variable with global scope, declare it inside the `:root` selector. The :root selector matches the document's root element.
 ```
 :root {
  --blue: #1e90ff;
  --white: #ffffff;
}
```

#
## [Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp):
* With MQ it possible to define different style rules for different media types/ screen size
* Styntax: 
``` 
/* Set the background color of body to tan */
body {
  background-color: tan;
}

/* On screens that are 992px or less, set the background color to blue */


@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* On screens that are 600px or less, set the background color to olive */


@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
```

* You can also use the ``(max-width: ..) and (min-width: ..) ```values to set a minimum width and a maximum width.

* You can also have different stylesheets for different media:
` <link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">`

#
## [CSS Selectors](https://trello.com/c/3hHqFZKH/52-css-selectors)

| Selector                | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| [attribute*=value]      | Select those elements whose attribute value contains the specified substring str.                 |
| [attribute=value]       | Select those elements whose attribute value is equal to “value”.                                  |
| [attribute$=value]      | Select those elements whose attribute value ends with a specified value “value”.                   |
| [attribute\|=value]     | Select those elements whose attribute value is equal to “value”. Whose attribute value started with “value” immediately followed by hyphen (-). |
| [attribute~=value]      | Select those elements whose attribute value contains a specified word.                             |
| [attribute^=value]      | Select those elements whose attribute value begins with the given attribute.                       |
| #id                     | Set the style of the given id. The id attribute is the unique identifier in an HTML document.      |
| *                       | Select all the elements in an HTML document.                                                       |
| :active                 | It is used in styling an active link on the web page. Style display when the user clicks on the link. |
| :after                  | It is used to add the same content multiple times after the content of other elements.             |
| :before                 | It is used to add the same content multiple times before the content of other elements.            |
| :checked                | Select all checked elements in the input tag and radio buttons.                                     |
| .class                  | Select all elements which belong to a particular class attribute.                                  |
| :default                | Set a default element in a group of the same type of element in a form.                             |
| :disabled               | This property is mostly used on the form elements.                                                 |
| element                 | Select HTML elements that are required to be styled.                                                |
| element element         | Select elements inside the elements.                                                                |
| element, element        | It is used to style all comma-separated elements with the same style.                               |
| element1 ~ element2     | It is used to match the occurrences of element2 followed by element1.                                |
| :empty                  | Select that element that does not contain any children (including the text node).                   |
| :enabled                | Set the background color in the enabled element in a form.                                          |
| :first-child            | Select those elements which are the first-child elements.                                           |
| :first-of-type          | It is used to target the first child of every element of its parent.                                 |
| ::first-letter          | Apply the style to the first letter of the first line of a block-level element.                     |
| ::first-line            | Apply style to the first line of a block-level element.                                             |
| :focus                  | It is used to target the focused element.                                                           |
| :hover                  | Style elements when the mouse hovers over them.                                                      |
| :indeterminate          | Select any form elements that are in an indeterminate state.                                         |
| :in-range               | Select all elements that are given within a particular range value.                                  |
| :invalid                | Select every form element that does not validate according to the elements.                          |
| :lang(language)         | Target the element which is based on language attributes for a specific value.                       |
| :last-child             | Target the last child element of its parent for styling.                                             |
| :last-of-type           | Target the last child element of the same type as its parent for styling.                             |
| :link                   | Target the unvisited link for styling, not the links which are already visited.                      |
| :not(selector)          | Style every element that is not specified by the selector


#
## [Flex box](https://trello.com/c/3hHqFZKH/52-css-selectors)

#
## [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp):

* All HTML elements can be considered as boxes.
*  It consists of: margins, borders, padding, and the actual content.