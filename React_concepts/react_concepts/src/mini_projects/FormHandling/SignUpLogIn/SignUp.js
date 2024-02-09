import React, { useRef, useState, useEffect } from 'react'

export default function SignUp() {
  const focusRef = useRef();
  
  useEffect(()=>{
    focusRef.current.focus()
  },[]);

 
const [showPassword, setShowPassword]= useState(false);
const handleShowPassword =()=>{
  setShowPassword(!showPassword)
}

  const initialState={
    name: "",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  };

  const [data, setData]=useState(initialState);
 
 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(data.password!==data.confirmPassword){
      alert('Password does not match')}else{
      setData(initialState);
    }
    }
    
 const handleFormInputChange=(e)=>{
  const {name, value}=e.target;

  setData((prevData)=>{
    const updatedData = {
      ...prevData,
      [name]:value
    }
    console.log(updatedData);
    return updatedData
  })
 }

  return (
    <>
    <div className='sinupForm'>
  
    <h2>SignUp</h2>
    <form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input 
        ref={focusRef}
        name='name'
        type='text'
        required 
        onChange={handleFormInputChange}
        value={data.name}
        placeholder='Enter Your Full Name'
        />
      <label htmlFor='Name'>email</label>
      <input
        name='email'
        type='email'
        required  
        onChange={handleFormInputChange}
        value={data.email} 
        placeholder='email id'
      />
      <label>Phone Number</label>
      <input 
        name='phoneNumber' 
        onChange={handleFormInputChange}
        required
        type='number' 
        value={data.phoneNumber}
        placeholder='Phone number'
        minLength={10}
        maxLength={10}
      />
      <label>Password</label>
      <input 
        name='password'
        type= {showPassword ? 'text' : 'password'} 
        onChange={handleFormInputChange}
        required 
        value={data.password}
        placeholder='Password'
      />
      <label>Confirm Password</label>
      <input 
        name='confirmPassword'
        type={showPassword ? 'text':'password'} 
        onChange={handleFormInputChange}
        required 
        value={data.confirmPassword}
        placeholder='Confirm Password'
      />
      <div className='showPassword'>
        <span>
          Show Password 
        </span>

        <input 
          className ="showPasswordInput"
          type='checkbox'
          onClick={handleShowPassword}
        />

      </div>
      <button type='submit'>SignUp</button>
    </form>
    </div>
    </>
  )
}
