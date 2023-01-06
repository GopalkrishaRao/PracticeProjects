import './App.css';
import Usestate from './Components/Hooks/Usestate/UsestateHook'
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Context from './Components/Context API prop drilling/Context';
// import HookNavbar from './Components/Hooks/HookNavbar';
function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hooks' element={<Usestate/>} />

      {/* <Route path='/hooks' element={<HookNavbar/>} /> */}
      <Route path='/contextapi' element={<Context/>} />
    </Routes>
    
   </>
  )
}

export default App;
