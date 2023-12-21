import React from 'react';
import CounterReducer from './Counter/CounterReducer';
import Todo from './Todo/Todo';

export default function UseReducer() {
  return (
    <>
    <h2>Use Reducer Hook</h2>
    <CounterReducer/>
    <Todo/>
    </>
  )
}
