import React, { useContext } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';

export default function Summary() {
   const {selAns} = useContext(appContext);

   
  return (
  <>
  {
    quizQuestions.map(e=>{
        return (
            <>
            <div className='questionSet'> 
              <span>{e.questionNumber }. </span> 
              {e.question}
            </div>
                {e.options.map(ans=>{
                    return(
                        <div className='options'>{ans}</div>
                    )
                })}
              <br/>
            </>
        )
    })
  }
  </>
  )
}
