import {  useSelector } from "react-redux";

export default function App() {
  const counter = useSelector(state=>stete.counter)
  return (
    <>
      <h2>Counter {counter}</h2>
    </>
  )
}
