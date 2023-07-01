import React from 'react';
import { quizQuestions } from './quetion';

export default function Summary() {
   
  return (
  <>
  {
    quizQuestions.map(e=>{
        return (
            <>
            <div className='questionSet'> 
              <span>{e.id}. </span> 
              {e.question}
            </div>
                {e.options.map(ans=>{
                    return(
                        <div className='options'>{ans}</div>
                    )
                })}
            </>
        )
    })
  }
  </>
  )
}
