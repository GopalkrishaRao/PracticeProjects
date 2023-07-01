import React, { useContext, useState } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';

export default function Quiz() {
    const {questNo} = useContext(appContext)

return (
    <>
    <div className='questionSet'>
      {quizQuestions[questNo].question}
    </div>
    <div>
      {quizQuestions[questNo].options.map(e=> 
        <div className='options'>
          {e}
        </div>)} 
    </div>
    </>

)
      
}

