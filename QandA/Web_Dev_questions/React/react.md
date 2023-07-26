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
## [Reconciliation]():
* a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
* When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.


#
## Shadow DOM:
* Shadow DOM is a browser technology that allows encapsulation of HTML, CSS, and JavaScript within a specific DOM subtree.
* It is a way to create isolated and encapsulated components, ensuring that the styles and behavior of a component don't affect or get affected by the styles and behavior of other components on the same page.

#
## Difference between Shadow DOM and Virtual DOM
* The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

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
* In the context of React, a decorator is a design pattern used to modify or extend the behavior of components or functions. It is not a built-in feature of React itself but is rather a concept that can be implemented using higher-order functions (HOCs) or through libraries that support decorator-like patterns.

* In JavaScript, decorators are functions that are applied to classes, methods, or properties to add extra functionality. React components can be created using ES6 classes or functional components. Decorators can be used with both class components and functional components.



#
## [React Mixins]():

#
## [What is Hooks and why there re created  (useState, useEffect,useContext, useref, useMemo )]

#
## [React Router]():

* React Router is a popular routing library for React applications that allows you to handle navigation and routing in a declarative way. 

#
## [Componet LifeCycle](https://www.w3schools.com/react/react_lifecycle.asp):
* Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

* The three phases are: Mounting, Updating, and Unmounting.
#
##  React tetsing Libraray
#
## React portals (for modals)
#
## what is Jest
#
## [Shallow Render]():
* a testing technique used in React to isolate the component being tested from its child components. Instead of rendering the full component tree, shallow rendering only renders the component being tested and none of its children.

* The primary purpose of shallow rendering is to test the behavior of the component in isolation without worrying about the implementation details of its child components. It allows you to focus on the unit testing of the component itself without triggering any lifecycle methods of its child components or any side effects they might have.


#
## [Strict Mode]:
*  Strict Mode is a feature in ReactJS that helps developers identify and fix potential problems in their code by enabling additional checks and warnings during the development phase. When you wrap your React application or a part of it with Strict Mode, React performs various runtime checks and warnings to assist developers in writing more maintainable and bug-free code.

#
## "key" prop and what is the benefit of using it in arrays of elements:
* A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

#
## What is the use of refs?
*  are a mechanism used to gain direct access to a DOM element or a React component instance that has been rendered in the render tree.
*  Refs provide a way to interact with components or DOM elements directly, bypassing the usual unidirectional data flow in React.
* The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.
#
## forward refs
* a technique in React that allows components to pass a ref they receive to one of their children. This is particularly useful in cases where you need to access the underlying DOM element or a React component instance of a child component directly from the parent component.

# 
## [controlled components]:
* a concept in React used for handling form elements where the value of the form element is controlled by React state rather than the DOM. 
* In a controlled component, the React component maintains the state of the form input, and any changes to the input are handled by updating the state. This way, React has full control over the form element's value and can ensure that it is always in sync with the state.
* A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.


* To create a controlled component, you need to do the following:

1. Set the initial state for the form element in the component's state.
2. Use the value prop for the form element to set its value to the state value.
3. Handle the onChange event for the form element to update the state when the user makes changes.
Here's an example of a controlled component for an input element:

```
import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., submit to the server
    console.log('Form submitted:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

```

* In the example above, the inputValue state variable is used to control the value of the input element. When the user types something into the input, the handleChange function updates the inputValue state accordingly. The value prop of the input is set to inputValue, which means the input will always display the value that is in the component's state.

* Controlled components offer several benefits:

1. Single Source of Truth: The component's state serves as the single source of truth for the form input value, making it easier to manage and track the data.

2. Easy Data Validation and Transformation: Since you control the data flow, you can easily validate and transform the input data before submitting it.

3. Improved Predictability: Because React controls the form input value, you can maintain a predictable and deterministic behavior for the form handling.

#
## uncontrolled components
* The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
* Uncontrolled components are a concept in React used for handling form elements where the value of the form element is managed by the DOM rather than by React state. In an uncontrolled component, the form element maintains its own state internally, and React does not control the value of the form input.


* To create an uncontrolled component, you simply let the form element manage its value without explicitly setting a React state or controlling its value with the value prop. Instead, you can use the defaultValue or defaultChecked props to set the initial value of the form element.

```
import React from 'react';

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the form input value using the DOM API
    const inputValue = event.target.elements.myInput.value;
    // Do something with the form data, e.g., submit to the server
    console.log('Form submitted:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myInput" defaultValue="" />
      <button type="submit">Submit</button>
    </form>
  );
}


```
* In the example above, we use the defaultValue prop to set the initial value of the input element. When the user types something into the input, the DOM will handle the input's value internally, and React will not be aware of the changes. When the form is submitted, we access the input value using the DOM API (event.target.elements.myInput.value) instead of querying the React state.

#
## [Lifting State Up]():
* When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.
* "Lifting State Up" is a powerful pattern in React that involves moving the state from a child component to a parent component in the component hierarchy. The goal is to create a single source of truth for the shared state and manage it in a higher-level component, allowing multiple child components to access and modify the state through props.

#
## [fragments]():
* It's a common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
* a way to group multiple elements together without introducing additional markup in the DOM. They allow you to return multiple elements from a component's render method without the need to wrap them in a container element like a `<div>`.

#
## [portals in React]():

* Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

* Portals in React are a feature that allows you to render a component's content in a different part of the DOM, outside its parent component's hierarchy. With portals, you can render a child component at a different DOM node (typically outside the root component) while maintaining the component's state and events as if it were still inside the original component's hierarchy.

* Portals are useful for scenarios where you need to render content outside the normal DOM flow. This can be helpful when you want to create overlays, modals, tooltips, or any other UI elements that need to be positioned outside the root component but still be part of the React application.

```

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Modal>
        <p>This is a modal content</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

* In this example, we have a Modal component that represents a modal dialog. The Modal component uses ReactDOM.createPortal to render its content (the children) into a DOM node with the ID 'modal-root', which is typically located outside the root component (where ReactDOM.render is called).

#
## [Render method of react-dom]():
* This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

#
## happen if you use props in initial state?
* If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

#
## Why we need to be careful when spreading props on DOM elements?
* When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with …rest  operator, so it will add only required props.

#
## [switching component]():
*  the concept of conditionally rendering different components based on a certain condition or state. It means displaying one component at a time while hiding others, depending on the specific criteria or user interactions.
*   done with conditional rendering (if else, ternary operator, switch case)

#
## Mixins:
* React mixins were a feature in earlier versions of React that allowed developers to share behavior among multiple components. A mixin is a way to reuse a set of functionalities and methods across multiple components by merging the mixin's properties into the components. This approach provided a form of code reuse and composition in React components.

However, React mixins were officially deprecated as of React v16.3.0, and their usage is discouraged. The React team made this decision due to several issues that mixins introduced, such as conflicts with lifecycle methods, increased complexity, and difficulties with debugging.

* Instead of mixins, the React team encourages developers to use other patterns and techniques for code reuse, such as Composition, Higher-Order Components, Render Props, React Hooks

#
## Why should component names start with capital letter?
*  component names should start with a capital letter to distinguish them from regular HTML elements and to follow the naming conventions of React.

#
## Why you can't update props in React?
* The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.
