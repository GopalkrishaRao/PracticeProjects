import React, { useState } from 'react';
import { quizQuestions } from './quetion';

export default function Quiz() {
    const [questNo, setQuestNo]= useState(0)

return (
    <>
    {/* {question.map(e=>{
        return(
        <>
           <p>
            <span>{e.questionNumber}.</span> 
            {e.question}
           </p>
           
            <div>a. <span>{e.options[0]}</span></div>
            <div>b. <span>{e.options[1]}</span></div>
            <div>c. <span>{e.options[2]}</span></div>
            <div>d. <span>{e.options[3]}</span></div>
           
        </>

        )
    })} */}
    <div className='questionSet'>
      {quizQuestions[questNo].question}
    </div>
    <div>
      {quizQuestions[questNo].options.map(e=> <div className='options'>{e}</div>)}
        
    </div>
    </>

)
      
}

