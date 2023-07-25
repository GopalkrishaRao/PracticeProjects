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
## [React fiber](https://www.geeksforgeeks.org/what-is-react-fiber/):
* React Fiber is an internal engine change geared to make React faster and smarter. 
* React Fiber is an internal reimplementation of the React reconciliation algorithm, which is responsible for the process of updating the virtual DOM and applying changes to the actual DOM in React applications

#
## [DOM](https://www.w3schools.com/js/js_htmldom.asp):
* the DOM is a representation of a web page's content that can be accessed and manipulated using programming languages like JavaScript.
* (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
* **The DOM tree** is a hierarchical model that represents the structure of an HTML or XML document. 
* Each element in the document (e.g., HTML tags like `<div>, <p>, <h1>`etc.) is represented as a node in the DOM tree. 

#
## [Virtual DOM]:
* a programming concept where an  “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. 

* The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called **reconciliation**.

* Here's how the Virtual DOM works:

* Initial rendering: When you create a component in your web application using a library like React, it generates a Virtual DOM representation for that component based on the JSX or JavaScript code you've written.

* Virtual DOM tree: The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It's a JavaScript object that mirrors the structure of the real DOM, containing nodes, elements, and their properties. However, unlike the real DOM, the Virtual DOM doesn't have direct connections to the browser's rendering engine, which makes it faster to manipulate and update.

* Reconciliation: When the state of your application changes (due to user interactions, API calls, or other events), a new Virtual DOM tree is created to represent the updated UI based on the new state.

* Diffing: The Virtual DOM then performs a process called "diffing" or "reconciliation." It compares the previous Virtual DOM tree (representing the old state) with the new Virtual DOM tree (representing the updated state) to find the differences between them.

* Minimal updates: The diffing process identifies the specific changes that need to be applied to the real DOM to bring it in sync with the updated Virtual DOM. It calculates the minimum number of changes required to achieve this synchronization. This is one of the key benefits of using Virtual DOM as it reduces the number of direct manipulations to the real DOM.

* Updating the real DOM: Once the minimal set of changes is determined, the Virtual DOM applies these changes to the real DOM in a batch update. This means that all the changes are made in one go, which minimizes layout thrashing and improves performance.

* Rendering to the screen: After the changes have been applied to the real DOM, the browser's rendering engine takes over and updates the visible UI on the screen. This rendering process only affects the elements that have changed, which makes it much faster than updating the entire UI.

#
## [react-dom package]():
* * It is a  part of the library which
 provides the necessary tools to interact with the browser's DOM and allows you to create and manage the user interface components efficiently.

* The react-dom package contains methods to work with React elements and manage their lifecycle in the browser.
* Some of the essential functions provided by react-dom include:  
  * ` ReactDOM.render(element, container[, callback])`: This function is used to render a React element into the DOM
  * ` ReactDOM.hydrate(element, container[, callback]):` Similar to ReactDOM.render, but used when you want to hydrate a server-rendered HTML on the client-side, enabling React to attach event listeners and other client-side functionalities without rebuilding the entire DOM.

  * `ReactDOM.unmountComponentAtNode(container):` This function is used to unmount (remove) a previously rendered React component from the DOM. It takes the container element as the parameter.

  * ` ReactDOM.createPortal(child, container):` A method used for rendering children components into a different DOM subtree, useful for cases like modals, popovers, or tooltips.

  *  `ReactDOM.findDOMNode(component):` This method is used to get the DOM node associated with a React component instance. However, it's worth noting that this method is considered legacy and should be used sparingly, as it might be deprecated in future versions.

#
## [reconciliation]():
* a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
* When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.

#
## [props]():
*  a way to pass data from a parent component to a child component. 
* They are read-only and cannot be modified by the child component.

#
## [state]():
* refers to an object that represents the internal data of a component.
*  It allows components to manage and store information that can change over time.

#
## [Statefull and State Less Component](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/):

|  Statefull Component |  State Less Component |
|---|---|
| component with internal state   |  React component without any internal state management |
|component render depends upon the value of the state|Component renders output which depends upon props value|
| class component can be stateless or stateful|A functional component is always a stateless component |



#
## [HOC-Higher Order Component]():
* A higher-order component is a function that takes a component as input and returns a new component.
* It returns an enhanced or modified version of that component.
* HOCs are used to reuse component logic, add additional functionality, or modify the behavior of a component without changing its core implementation.

#
## [Error Boundaries](https://legacy.reactjs.org/docs/error-boundaries.html):
* Feature that allows you to gracefully handle errors that occur during rendering, lifecycle methods, or in the constructor of any React component. 
* Normally, when an error occurs in a component, it can propagate to higher-level components, potentially causing a complete failure of the application. 
* Error boundaries help prevent this by catching errors within their component tree and displaying a fallback UI instead of crashing the whole app.

#
## [Prop drilling]()
* process of passing data from a parent component to a deeply nested child component by passing props through intermediary components which may or may not need the data themselves.
* **Disadvantages**:
  * Readability and Maintanance is difficult
  * Impact performance
* **Solutionts / Alternatives**: 
  * Use React Context (Context API)
  * State management libraries like Redux

  #
  ## [Context API]():
  *  feature in React that provides a way to share data throughout the component tree without having to pass props manually at each level. 
  * The Context API consists of two main components: the Context object and the Provider component.

  1. Context Object: The Context object is created using the React.createContext() method. It returns a Context object that contains a Provider and a Consumer. The Provider is responsible for passing data down to all the child components, while the Consumer allows components to consume the data from the context.

  2. Provider Component: The Provider component wraps the part of the component tree where you want to make the context data available. It takes a value prop, which represents the data you want to share. Any component within the Provider's subtree can access this data using the Consumer or the useContext hook (introduced in React 16.8).


#
## [Conditional Rendering]():
* rendering different components or UI elements based on certain conditions or values.
* Can be implimented by if-else statements,  ternary and logical (&& ||) operaters, switch case

#
## [Decorator in react]():
* 