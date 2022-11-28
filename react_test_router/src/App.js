import logo from './logo.svg';
import './App.css';
import Navbar from './Compotnets/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './Compotnets/navcomponets/Home';
import About from './Compotnets/navcomponets/About';
import Error from './Compotnets/navcomponets/Error';

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>;
          <Route path='/about' element={<About/>}/>;
          <Route path='/*' element={<Error/>}/>;

       </Routes>
    </>
  );
}

export default App;
