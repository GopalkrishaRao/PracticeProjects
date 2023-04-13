#
### HTML:
* Hyper Text Markup Languag
* for creating Web pages
*  describes the structure of a Web page
* consists of a series of elements that  tell the browser how to display the content

#
## HTML Element / tag:
* The HTML element is everything that are written between stant and end tag

| Start tag  |  Element content | End tag  |
|---|---|---|
| `<h1>`  | My First Heading  |  `</h1>` |

* Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. 
# 

### HTML is Not Case Sensitive
* `<P> means the same as <p>.`

#
###  <!DOCTYPE> 
 * The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
 *
 #
 ### Semantic HTML
 * A semantic element clearly describes its meaning to both the browser and the developer.

 * Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <p> tag indicates that the enclosed text is a paragraph.
 * Follwing are some examples of symmetic tags. 
 ```
 <article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```
#
## [HTML Attributes](https://www.w3schools.com/tags/ref_attributes.asp):
* HTML attributes provide additional information about HTML elements.
* All HTML elements can have attributes
* Attributes are always specified in the start tag
* Attributes usually come in name/value pairs like: `name="value"`
* `The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:`
* Image tag uses src attibute  `<img src="img_girl.jpg">`
#
## HTML Comment Tag
* `<!-- Write your comments here -->`
#
## [HTML `<picture>` Element](https://www.w3schools.com/html/html_images_picture.asp):
* The HTML <picture> element allows you to display different pictures for different devices or screen sizes.
#
## [HTML Tabel](https://www.w3schools.com/html/html_tables.asp):
*
 ```
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>
```

* 
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>

#
## class Attribute:
* class attribute is used to specify a class for an HTML element.
* The class name is case sensitive!
* HTML elements can belong to more than one class
* To define multiple classes, separate the class names with a space
* Different HTML elements can point to the same class name
JavaScript can access elements with a specific class name with the ` getElementsByClassName() `method

#
## id Attribute:
* id attribute is used to specify a unique id for an HTML element
* cannot have more than one element with the same id
* The id name is case sensitive!
he id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).
* JavaScript can access an element with a specific id with the `getElementById()` method:
#
##  Iframes:
*  iframe is used to display a web page within a web page.
* Use the `height` and `width` attributes to specify the size of the iframe.
* syntax 
* `<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`
* Or you can add the style attribute and use the CSS height and width properties:
* `<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>`
#
## `<noscript>` Tag:
* `<noscript>` tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts:
* 
```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```
#
## `<meta>` tag:
* `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings. 
* The metadata will not be displayed on the page, but is used by browsers (how to display content or reload page), by search engines (keywords), and other web services.
* 
```
* Define the character set used:
<meta charset="UTF-8">


* Define keywords for search engines:

<meta name="keywords" content="HTML, CSS, JavaScript">


* Define a description of your web page:

<meta name="description" content="Free Web tutorials">


* Define the author of a page:

<meta name="author" content="John Doe">

* Refresh document every 30 seconds:

<meta http-equiv="refresh" content="30">


* Setting the viewport to make your website look good on all devices:

<meta name="viewport" content="width=device-width, initial-scale=1.0">


```
#
## [HTML computercode](https://www.w3schools.com/html/html_computercode_elements.asp):
* The `<kbd>` element defines keyboard input
* The `<samp>` element defines sample output from a computer program
* The `<code>` element defines a piece of computer code
* The `<var>` element defines a variable in programming or in a mathematical expression
* The `<pre>` element defines preformatted text

#
## HTML Entities:
* Some characters are reserved in HTML.
* Entity names are case sensitive.

* If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

* Character entities are used to display reserved characters in HTML.
#
## [HTML Form](https://www.w3schools.com/html/html_forms.asp):
