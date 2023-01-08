import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Context_api_hompage from './Components/Context API prop drilling/context_api_hompage';
import Hooks_homepage from './Components/Hooks/Hooks_homepage';
function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hooks' element={<Hooks_homepage/>
        } />

      {/* <Route path='/hooks' element={<HookNavbar/>} /> */}
      <Route path='/contextapi' element={<Context_api_hompage/>} />
    </Routes>
    
   </>
  )
}

export default App;
