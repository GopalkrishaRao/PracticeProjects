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
## Global Attributes:
Global attributes are a set of attributes that can be used on most HTML elements. They provide common functionality and are not specific to any particular element. Here are some examples of global attributes:

* `class`: Specifies one or more CSS classes to be associated with an element, allowing CSS styling and JavaScript manipulation.
* `id`: Provides a unique identifier for an element, which can be used for styling or JavaScript targeting.
* `style`: Allows inline CSS styling to be applied to an element.
* `title`: Defines a text tooltip that appears when hovering over the element.
* `lang`: Specifies the language of the element's content.
* `data-*`: Allows custom data attributes to be added for storing additional data that can be accessed via JavaScript.


Example usage of global attributes:
```
<div class="container" id="main-container">
  <p style="color: red;">This is a paragraph.</p>
  <a href="https://www.example.com" title="Visit Example Website">Visit Example Website</a>
</div>
```
In the above example, the `<div>` element has the class and id attributes, the `<p>` element has the style attribute for inline styling, and the `<a>` element has the href and title attributes.
* Global attributes provide flexibility and standardization across different elements, allowing for consistent functionality and behavior across HTML documents.

#
## HTML Comment Tag
* `<!-- Write your comments here -->`
#
## [HTML `<picture>` Element](https://www.w3schools.com/html/html_images_picture.asp):
* The HTML <picture> element allows you to display different pictures for different devices or screen sizes.
#
## difference between `<figure>` tag and `<img>` tag
* **`<img>` Tag:**
The `<img>` tag is specifically used to embed an image into an HTML document. It does not require a closing tag and is a self-closing tag. It has attributes such as src (to specify the image URL), alt (to provide alternative text for accessibility and SEO), width, height, and more.

Example:
```
<img src="image.jpg" alt="Description of the image">

```
In the above example, the `<img>` tag is used to display an image file named "image.jpg" with the alternative text "Description of the image".

* **`<figure>` Tag:**
The `<figure>` tag is used to encapsulate and represent self-contained content, typically an image, illustration, diagram, code snippet, or any media object along with its caption. It provides a semantic grouping for the content and its associated description. The `<figure>` tag should contain an `<img>` tag or any other media element and can also include a `<figcaption>` tag to specify the caption for the content.

```
<figure>
  <img src="image.jpg" alt="Description of the image">
  <figcaption>Caption for the image</figcaption>
</figure>

```

* In the above example, the `<figure>` tag is used to group the image along with its caption. The `<img>` tag represents the image, and the `<figcaption>` tag provides the caption text.

* The `<figure>` tag adds semantic meaning to the content, indicating that the enclosed elements are related and form a cohesive unit. It helps assistive technologies and search engines understand the relationship between the image and its caption.

* In summary, the `<img>` tag is used specifically for displaying images, while the `<figure>` tag is used to group self-contained content, such as an image, and its associated caption. The `<figure>` tag provides additional semantic meaning and aids in the representation and understanding of the relationship between the content and its description.


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
##  Advantages of HTML5 over its previous versions
* **Improved Semantics:**
 HTML5 introduced a set of semantic elements (e.g., `<header>`, `<nav>`, `<article>`) that provide a clearer and more meaningful structure to web pages. This helps search engines better understand the content and improves accessibility.

* **Native Multimedia Support:** HTML5 introduced native support for audio and video elements (`<audio>` and `<video>`). This eliminates the need for third-party plugins like Flash and enables developers to embed multimedia content directly into web pages.

* **Canvas and SVG:** HTML5 introduced the `<canvas>` element, which allows for dynamic and interactive rendering of graphics and animations using JavaScript. Additionally, HTML5 brought support for Scalable Vector Graphics (SVG), which enables the use of vector-based graphics that scale smoothly across different screen sizes.

* **Offline Capabilities:** HTML5 introduced the Application Cache (`<appcache>`) and Local Storage (localStorage) features, which enable web applications to work offline or in low-connectivity situations. Developers can cache resources and store data locally, enhancing the user experience and allowing offline functionality.

* **Enhanced Forms:** HTML5 introduced several new input types (`<input type="date">`, `<input type="email">`, `<input type="range">`, etc.) and form validation features. This simplifies form handling, improves user experience, and reduces the need for custom JavaScript validations.

* **Responsive Design:** HTML5 provides better support for responsive web design, allowing developers to create fluid and adaptive layouts that adjust to different screen sizes and devices. This is achieved through features like media queries and new layout elements such as `<section>` and `<article>`.

* **Improved Performance:** HTML5 includes various performance optimizations, such as the ability to load scripts asynchronously (async and defer attributes), which improves page loading speed. Additionally, HTML5 introduced the Web Workers API, enabling multi-threading and background processing for complex tasks.

* **Geo-location:** HTML5 introduced the Geolocation API, which allows web applications to retrieve the user's location information (with user consent). This feature enables location-based services and enhances the functionality of location-aware web applications.

* **Cross-platform Compatibility:** HTML5 is designed to work consistently across different platforms and devices, promoting cross-platform compatibility. It reduces the need for platform-specific coding and ensures a more unified experience for users.

#
## [HTML Form](https://www.w3schools.com/html/html_forms.asp):
