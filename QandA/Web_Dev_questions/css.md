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

#
## [Flex box](https://trello.com/c/3hHqFZKH/52-css-selectors)