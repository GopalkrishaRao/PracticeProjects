#
## Difference between window and document
* The **"window"** object represents the browser window or tab that contains the loaded web page. 
* It acts as the global object in the browser environment and provides various properties and methods related to the window and its content.
*  The "window" object is accessible globally, and you can refer to it without explicitly mentioning "window" (e.g., alert('Hello') is the same as window.alert('Hello')).
* Some commonly used properties and methods of the "window" object include:

* `window.alert()`: Displays a message box with a specified message and an OK button.
* `window.location`: Represents the current URL and provides methods to manipulate the browser's location.
* `window.document`: Refers to the Document object that represents the web page loaded in the window.
#
* **"document"** object represents the HTML document loaded in the browser window. 
* It provides an interface to interact with the structure and content of the web page. 
* The "document" object is a property of the "window" object, accessible through window.document or simply document within the global scope.
* `document.getElementById()` , `document.createElement()` are some examples.

#
##  [preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL):
* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur



#
## [BOM -  Browser Object Model](https://www.w3schools.com/js/js_window.asp):
* It allows to intract Javascript with Browser.

#
## [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)
*  The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

#
## [JS Cookies](https://www.w3schools.com/js/js_cookies.asp):


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
## [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill):
* A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. 
