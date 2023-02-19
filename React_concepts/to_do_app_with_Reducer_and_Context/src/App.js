import './App.css';
import React, {useReducer} from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TodoContext} from './components/context/TodoContext';
import todoReducer from './components/context/reducer';


const App = ()=>{
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
      </Container>
    </TodoContext.provider>
  )
}

export default App;
