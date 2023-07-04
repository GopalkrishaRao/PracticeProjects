import './App.css';
import { useState } from 'react';
import { appContext } from './Components/context/context';
import { quizQuestions } from './Components/quetion';
import Quiz from './Components/Quiz';
import Navbuttons from './Components/Navbuttons';
import Summary from './Components/Summary';
import Resultpage from './Components/Resultpage'

function App() {
  const [questNo, setQuestNo]= useState(0);
  const [selAns, setSelAns] = useState([]);
  const [submit, setSubmit] = useState(false);


  
  return (
    <>
    <appContext.Provider 
      value={{questNo, setQuestNo, selAns, setSelAns,   setSubmit}}
    >

      <div className='App'>
        {submit ? <Resultpage/> :       
        (questNo<quizQuestions.length) ? <Quiz/> : <Summary/>     
        }
      </div>
    </appContext.Provider>
    </>

  );
}

export default App;
