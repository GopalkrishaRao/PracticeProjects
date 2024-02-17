import React, { useState, useRef, useEffect } from 'react'

export default function OtpUi({length=4, onOtpSubmit=()=>{ }}) {
   
    const [otp, setOtp]=useState(new Array(length).fill(""))
    
    const inputRefs = useRef([]);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    },[]);

    const handleChange =(index, e)=>{
        const value=e.target.value;
        if(isNaN(value)) return;

        const newOtp=[...otp];
        // allow only one input

        newOtp[index] =value.substring(value.length-1);
        setOtp(newOtp);
        // submit tirigger
        const combinedOtp=newOtp.join('');
        if(combinedOtp.length===length){
            onOtpSubmit(combinedOtp)
        };

        // Move to next input if current field is filled

        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus()
        }
    };

    const handleClick=(index)=>{
        // move foucus point to last even if clicked before the number
        inputRefs.current[index].setSelectionRange(1,1)

        //Move focus back to empty input field on click if skipped a input field 
        // optional
        if(index>0 && !otp[index-1]){
            inputRefs.current[otp.indexOf('')].focus()
        }
    };
    const handleKeyDown=(index,e)=>{
        // Moving focus to the previous input field on backspace
        if(e.key==='Backspace' && 
        !otp[index] && 
        index>0 &&
        inputRefs.current[index-1] ){
            inputRefs.current[index-1].focus()
        }
    };

  return (
    <div>
    {
        otp.map((value, index)=>{
            return <input
            key={index}
            type='text'
            value={value}
            onChange={(e)=>handleChange(index, e)}
            onClick={()=>{handleClick(index)}}
            onKeyDown={(e)=>{handleKeyDown(index, e)}}
            className='otpInput'
            ref={(input)=>inputRefs.current[index]=input}/>
        })
    }
    </div>
  )
}
