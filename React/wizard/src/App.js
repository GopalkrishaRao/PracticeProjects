import './App.css';
import { useState } from 'react';
import { appContext } from './Components/context/context';
import Quiz from './Components/Quiz';
import Navbuttons from './Components/Navbuttons';

function App() {
  const [questNo, setQuestNo]= useState(0)
  
  return (
    <>
    <appContext.Provider 
      value={{questNo, setQuestNo}}
    >

      <div className='App'>
        <Quiz/>
        <Navbuttons/>
      </div>

    </appContext.Provider>
    </>

  );
}

export default App;
