import React, { useContext } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';

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
      {quizQuestions[questNo].options.map(e=> 
        <div 
          onClick={()=>markAsn(e)}
          // add backround color to selected option 
          className={`options ${selAns[questNo]===e ?' selected-option' : ''}`}
        >
          {e}
        </div>)} 
    </div>
    </>
)   
}

