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
*  It is an extension syntax used by libraries like React for building user interfaces

#
## [Element]():
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