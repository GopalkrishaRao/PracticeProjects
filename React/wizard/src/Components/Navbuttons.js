import React, { useContext } from 'react';
import { appContext } from './context/context';
import { quizQuestions } from './quetion';

export default function Navbuttons() {

    const {questNo, setQuestNo, selAns, setSubmit} = useContext(appContext);

    const prevQuest = ()=>{
        if(questNo>=1){
            setQuestNo(()=>questNo-1)
        }
    };

    const nextQuest = ()=>{
        if(questNo<quizQuestions.length){
            if(selAns[questNo]===undefined){
                alert('Plese selct an option')
            }else{
                setQuestNo(()=>questNo+1) 
            }
        }
    };
    
    const submitAns = ()=>{
        setSubmit(()=>true)
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
                onClick={submitAns}
            >
                Submit
            </button>
            )
        }
    </div>
    </>
  )
}
