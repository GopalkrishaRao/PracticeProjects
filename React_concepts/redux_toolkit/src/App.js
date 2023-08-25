import logo from './logo.svg';
import './App.css';
import Todos from './compoents/Todos';
import AddTodo from './compoents/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
     
    </div>
  );
}

export default App;
