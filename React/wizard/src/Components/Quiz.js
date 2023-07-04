import React, { useContext } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';
import Navbuttons from './Navbuttons';

export default function Quiz() {
    const {questNo, selAns, setSelAns} = useContext(appContext);

    const markAsn = (selectedOption) => {
      setSelAns(prevSelAns => {
        const updatedSelAns = [...prevSelAns];
        updatedSelAns[questNo] = selectedOption;
        return updatedSelAns;
      });
    };

 
return (
    <>
    <div className='questionSet'>
      {quizQuestions[questNo].question}
    </div>
    
    <div>
      {quizQuestions[questNo].options.map(opt=> 
        <div 
          onClick={()=>markAsn(opt)}
          // add backround color to selected option 
          className={`options ${selAns[questNo]===opt ?' selected-option' : ''}`}
        >
          {opt}
        </div>)} 
    </div>
    <Navbuttons/>

    </>
)   
}

