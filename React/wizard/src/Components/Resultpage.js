import React from 'react';
import { quizQuestions } from './quetion';

export default function Resultpage() {
  return (
    <>
    <h2> 
        Your Score is {} out of {quizQuestions.length}
    </h2>
    
    </>
  )
}
