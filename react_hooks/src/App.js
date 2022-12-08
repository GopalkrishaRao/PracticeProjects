import './App.css';
import Usestate from './Components/Usestate/UsestateHook';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Context from './Components/Context API prop drilling/Context';
function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/usestatehook' element={<Usestate/>} />
      <Route path='/contextapi' element={<Context/>} />

    </Routes>
   </>
  )
}

export default App;
