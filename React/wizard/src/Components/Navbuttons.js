import React, { useContext } from 'react';
import { appContext } from './context/context';
import { quizQuestions } from './quetion';

export default function Navbuttons() {

    const {questNo, setQuestNo} = useContext(appContext);

    const prevQuest = ()=>{
        if(questNo>=1){
            setQuestNo(()=>questNo-1)
        }
    };

    const nextQuest = ()=>{
        if(questNo<quizQuestions.length){
            setQuestNo(()=>questNo+1) 
        }
    }
    
  return (
    <>
    <div className='navBtn'>
        <button 
            className='previous'
            onClick={prevQuest}
        >
            Prev
        </button>
        {(questNo<=quizQuestions.length-1) 
            ? (
            <span>
                Question {questNo+1} of {quizQuestions.length}
            </span>
            ) : (  "" 
            )
        }
                
        {(questNo<quizQuestions.length)
            ? (
            <button 
                className='next'
                onClick={nextQuest}
            >
                Next
            </button>
            ) : (
            <button 
                className='submit'
            >
                Submit
            </button>
            )
        }
    </div>
    </>
  )
}
