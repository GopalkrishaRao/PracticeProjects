#
## [React](https://react.dev/):
* React is an open-source front-end JavaScript library that is used for building user
interfaces, especially for single-page applications. 

* **Major features of React**:
    * Use of VirtualDOM
    * Supports server-side rendering.
    * Follows Unidirectional data flow or data binding
    * Uses reusable/composable UI components 

#
## [JSX]()
* JSX stands for JavaScript XML. 
* JSX allows you to write HTML-like code directly in your JavaScript files
* Basically it just provides syntactic sugar for the React.createElement() function
*  It is an extension syntax used by libraries like React for building user interfaces

#
## [Element]():
*  a lightweight, plain JavaScript object that represents a virtual representation of a DOM node or component in the user interface. 
* An element in React represents a plain object that describes what you want to see on the screen.
* It is the smallest building block of a React application. 
* React elements are lightweight and immutable. 
React elements have a specific structure and are usually created using JSX (JavaScript XML) syntax.

```
    const element = <h1>Hello, World!</h1>;

 ```

#
## [Component]():
* A component is a reusable and self-contained piece of code that encapsulates the logic and UI representation.
* It can be considered as a custom-made React element. 
* Components are created using either class components or function components.
* They have a well-defined API and can have properties (props) and maintain their own state. 
* Components can be composed together to build complex UIs.

```
    function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

```
#
## [Babel](https://dev.to/getd/wtf-are-babel-and-webpack-explained-in-2-mins-43be):
* Babel is simply a translator, who translates your 'fancy' (ES6+) JS code into 'not-so-fancy' (ES5) ones that browser (front-end) or Node.js (back-end) understands.

#
## [Webpack]():
* Webpack as a mega-multi-translator that works with all kinds of languages (or assets). For example, Webpack often runs Babel as one of its jobs. Another example, Webpack can collect all your inline CSS styles in your Javascript files and bundle them into one.

#
## [DOM](https://www.w3schools.com/js/js_htmldom.asp):
* the DOM is a representation of a web page's content that can be accessed and manipulated using programming languages like JavaScript.
* (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
* **The DOM tree** is a hierarchical model that represents the structure of an HTML or XML document. 
* Each element in the document (e.g., HTML tags like `<div>, <p>, <h1>`etc.) is represented as a node in the DOM tree. 

#
## [Virtual DOM]:
* The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called **reconciliation**.

* Virtual DOM (VDOM) is a concept used in modern web development frameworks to efficiently update the user interface (UI) of web applications. 
* The Virtual DOM is an abstraction of the real DOM, a tree-like structure representing the HTML elements of a web page.

* Here's how the Virtual DOM works:

Initial rendering: When you create a component in your web application using a library like React, it generates a Virtual DOM representation for that component based on the JSX or JavaScript code you've written.

Virtual DOM tree: The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It's a JavaScript object that mirrors the structure of the real DOM, containing nodes, elements, and their properties. However, unlike the real DOM, the Virtual DOM doesn't have direct connections to the browser's rendering engine, which makes it faster to manipulate and update.

Reconciliation: When the state of your application changes (due to user interactions, API calls, or other events), a new Virtual DOM tree is created to represent the updated UI based on the new state.

Diffing: The Virtual DOM then performs a process called "diffing" or "reconciliation." It compares the previous Virtual DOM tree (representing the old state) with the new Virtual DOM tree (representing the updated state) to find the differences between them.

Minimal updates: The diffing process identifies the specific changes that need to be applied to the real DOM to bring it in sync with the updated Virtual DOM. It calculates the minimum number of changes required to achieve this synchronization. This is one of the key benefits of using Virtual DOM as it reduces the number of direct manipulations to the real DOM.

Updating the real DOM: Once the minimal set of changes is determined, the Virtual DOM applies these changes to the real DOM in a batch update. This means that all the changes are made in one go, which minimizes layout thrashing and improves performance.

Rendering to the screen: After the changes have been applied to the real DOM, the browser's rendering engine takes over and updates the visible UI on the screen. This rendering process only affects the elements that have changed, which makes it much faster than updating the entire UI.

#
## [reconciliation]():
* When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.
