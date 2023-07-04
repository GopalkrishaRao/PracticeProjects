import React, { useContext } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';
import Navbuttons from './Navbuttons';

export default function Summary() {
   const {selAns} = useContext(appContext);

  return (
  <>
  <div>
    Summary
  </div>
  <br/>
  {
    quizQuestions.map((e,n)=>{
        return (
            <>
            <div className='questionSet'> 
              <span>{e.questionNumber }. </span> 
              {e.question}
            </div>
                {e.options.map(ans=>{
                    return(
                      <div className='opt'>
                        <div 
                          // coloring selected options
                          className={`options ${selAns[n]===ans ? 'selected-option' : ''}`}
                        >{ans}</div>
                      </div>
                    )
                })}
              <br/>
             
            </>
        )
    })
  }
  <Navbuttons/>
  <br/>
  </>
  )
}
