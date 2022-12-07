import './App.css';
import Usestate from './Components/Usestate/UsestateHook';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/usestatehook' element={<Usestate/>} />
    </Routes>
   </>
  )
}

export default App;
