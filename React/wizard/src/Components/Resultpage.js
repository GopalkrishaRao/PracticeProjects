import React, { useContext, useState, useEffect } from 'react';
import { quizQuestions } from './quetion';
import { appContext } from './context/context';

export default function Resultpage() {
  const {selAns}=useContext(appContext);
  const [score, setScore]= useState(0);
  window.scrollTo(0, 0);

  useEffect(() => {
    let x = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      if (selAns[i] === quizQuestions[i].answer) {
        x = x + 1;
      }
    }
    setScore(x);
  }, [selAns]);

  return (
    <>
    <h2 className='result'> 
        Your Score is {score} out of {quizQuestions.length}
    </h2>
    <h3>Answers:</h3>
    {
    quizQuestions.map((e, n)=>{
        return (
            <>
            <div className='questionSet'> 
            <div className='answerStatus'>{`${quizQuestions[n].answer===selAns[n]? `Correct` : `InCorrect`}`}</div>
              <span>{e.questionNumber }. </span> 
              {e.question}
            </div>
              {e.options.map(opt=>{
                return(
                  <div className='opt'>
                  <div 
                    className = {` options
                      ${((selAns[n]===opt && selAns[n]!==quizQuestions[n].answer) ? 'selected-option' : '')}
                      ${ (quizQuestions[n].answer ===opt ) ? ' correct-ans':''}`
                    }
                  >
                    {opt}
                  </div>
                </div>
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
