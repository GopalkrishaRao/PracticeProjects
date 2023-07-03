import './App.css';
import { useState } from 'react';
import { appContext } from './Components/context/context';
import { quizQuestions } from './Components/quetion';
import Quiz from './Components/Quiz';
import Navbuttons from './Components/Navbuttons';
import Summary from './Components/Summary';

function App() {
  const [questNo, setQuestNo]= useState(0);

  const [selAns, setSelAns] = useState([]);


  
  return (
    <>
    <appContext.Provider 
      value={{questNo, setQuestNo, selAns, setSelAns}}
    >

      <div className='App'>
        {(questNo<quizQuestions.length) ? <Quiz/> : <Summary/>}
        <Navbuttons/>
      </div>
    </appContext.Provider>
    </>

  );
}

export default App;
