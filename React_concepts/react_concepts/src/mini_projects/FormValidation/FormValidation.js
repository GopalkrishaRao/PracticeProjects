import React, { useState } from 'react';
import './form.css';

 const FormValidation = () => {
  const formInitalState = {
    firstName:"",
    lastName:"",
    email: "",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    age:"",
    gender:"",
    interests:[],
    birthDate:"",
  };

  const [formData, setFormData]=useState(formInitalState);
  const [errors, setErrors]= useState({});

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleCheckboxChange=(e)=>{
    const {name, checked}=e.target;

    let updateInterests = [...formData.interests];

    if(checked){
      updateInterests.push(name)
    }else{
      updateInterests = updateInterests.filter((interest)=>interest!==name)
    };

    setFormData({
      ...formData, 
      interests:updateInterests
    });

  };

  // Form  validation
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  const validateForm = ()=>{
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(formData.age)) {
      newErrors.age =
        "You must be at least 18 years old and not older than 100 years";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Date of birth is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const isValid = validateForm();
    if(isValid){
      console.log("Form Submitted", formData);
      setFormData(formInitalState);
    }else{
      console.log("Form Validation Failed");
    }

  };
  return (
  <>
  <h2 className='title'>
    FormValidation
  </h2>
  <form
    className='form' 
    onSubmit={handleSubmit}>
  <div>
    <label>First Name:</label>
    <input
      type='text'
      name='firstName'
      value={formData.firstName}
      placeholder='Enter Your First Name'
      onChange={handleChange}/>
  {errors.firstName && <div className="error">{errors.firstName}</div>}
  </div>
  <div>
    <label>Last Name:</label>
    <input
      onChange={handleChange}
      type='text'
      name='lastName'
      value={formData.lastName}
      placeholder='Enter Your Last Name'/>
  {errors.lastName && <div className="error">{errors.lastName}</div>}
  </div>
  <div>
    <label>email:</label>
    <input
      onChange={handleChange}
      type='email'
      name='email'
      value={formData.email}
      placeholder='Enter email id'/>
  {errors.email && <div className="error">{errors.email}</div>}
  </div>
  <div>
    <label>Phone Number:</label>
    <input
      onChange={handleChange}
      type='text'
      name='phoneNumber'
      value={formData.phoneNumber}
      placeholder='Enter Phone Number'/>
  {errors.phoneNumber && (
          <div className="error">{errors.phoneNumber}</div>
        )}
  </div>
  <div>
    <label>Password:</label>
    <input
      onChange={handleChange}
      type='password'
      name='password'
      value={formData.password}
      placeholder='Enter Password'/>
  {errors.password && <div className="error">{errors.password}</div>}
  </div>
  <div>
    <label>Confirm Password:</label>
    <input
      onChange={handleChange}
      type='password'
      name='confirmPassword'
      value={formData.confirmPassword}
      placeholder='Enter Your Password'/>
  {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
  </div>
  <div>
    <label>Age:</label>
    <input
      onChange={handleChange}
      type='number'
      name='age'
      value={formData.age}
      placeholder='Enter Your Age'/>
  {errors.age && <div className="error">{errors.age}</div>}
  </div>
  <div>
    <label>Gender:</label>
    <select 
        name='gender' 
        value={formData.gender}
        onChange={handleChange}>
      {/* <option value="">Select Gender</option> */}
      <option value="male">
        Male
      </option>
      <option value="female">
        Female
      </option>
      <option value="other">
        Other
      </option>
    </select>
    {errors.gender && <div className="error">{errors.gender}</div>}
  </div>
  <div>
    <label>Interests:</label>
    <label>
      <input
        type='checkbox'
        name='coding'
        checked = {formData.interests.includes("coding")}
        onChange={handleCheckboxChange}
      />
      Coding
    </label>
    <label>
      <input
        onChange={handleCheckboxChange}
        type='checkbox'
        name='sports'
        checked = {formData.interests.includes("sports")}
      />
      Sports
    </label>
    <label>
      <input
        onChange={handleCheckboxChange}
        type='checkbox'
        name='reading'
        checked = {formData.interests.includes("reading")}
      />
      Reading
    </label>
    {errors.interests && <div className="error">{errors.interests}</div>}
  </div>
  <div>
    <label>DOB:</label>
    <input
      onChange={handleChange}
      type='date'
      name='birthDate'
      value={formData.birthDate}
      placeholder='Enter Your Age'/>
       {errors.birthDate && <div className="error">{errors.birthDate}</div>}
  </div>
    <button 
      className='submitBtn' type='submit'>
      Submit
    </button>   
  </form>
  </>
  )
};
export default FormValidation;
