import React, {useState} from 'react'
import OtpUi from './OtpUi';

export default function PhoneNumber() {
    const [phoneNumber, setPhoneNumber]=useState('');
    const [showOtpInput, setShowOtpInput]= useState(false);

    
  

    const handlePhoneNumber = (event)=>{
        setPhoneNumber(event.target.value)

    };

    const handlePhoneSubmit=(e)=>{
        e.preventDefault();
        // phone validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('Invalid Phone Number')
            return ;
        }
        // call backend API

        // Show OTP
        setShowOtpInput(true)
    };
    
    const onOtpSubmit =(otp)=>{
        console.log("success");
    }
  return (
    <>
    {!showOtpInput ? 
    (<form onSubmit={handlePhoneSubmit}>
        <input
        type='text'
        value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='Enter Phone Number'
        />
        <button type='submit'>
            Send OTP
        </button>
    </form>) 
    :(
     <div>
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpUi length={4} onOtpSubmit={onOtpSubmit}/>
     </div>   
    ) }  
    </>
  )
}
