import React, {useState, useContext} from 'react';
import { EmployeeContext } from '../context/employeeContext';
import './addform.css';

export const AddForm = () => {
const{setTougleForm, empData, setEmpData } =useContext(EmployeeContext)
// const {setTougleForm, setEmpData, empData}=props;

    const formInitalState = {
        id: "",
        imageUrl: "",
        firstName:"",
        lastName:"",
        email: "",
        contactNumber:"",
        age:"",
        dob:"",
        salary:"",
        address:""
    };

    const [formData, setFormData]=useState(formInitalState);
   
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        // Logic to update it to data
        setEmpData((prevStateData)=>[...prevStateData, formData])

        setFormData(formInitalState);
        setTougleForm(false);
    };

    const hadleFormChange=(e)=>{
        const {name, value}=e.target;
        const updatedValue= {...formData, id:Date.now(), [name]:value}; 
        setFormData(updatedValue);
    };
    const handleClick=()=>{
        setTougleForm(false);
    };

  return (
    <>
    <div className='addForm'>
        <button 
            onClick={handleClick}
            className='closeBtn'>
            Close
        </button>
        <h2 className='formTitle'>Add New Employee</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='fName'>
               First Name:
                <input 
                    id='fName' 
                    onChange={hadleFormChange}
                    value={formData.firstName}
                    name='firstName'
                    required
                    type='text'
                    placeholder='First Name'
                />
            </label>
            <label htmlFor='lName'>
                Last Name:
                <input 
                    id='lName' 
                    onChange={hadleFormChange}
                    value={formData.lastName}
                    name='lastName'
                    placeholder='Last Name'
                    required
                    type='text'
                />
            </label>
            <button className='addBtnForm' type='submit'>
                Add 
            </button>
        </form>
    </div>
    </>
  )
}
