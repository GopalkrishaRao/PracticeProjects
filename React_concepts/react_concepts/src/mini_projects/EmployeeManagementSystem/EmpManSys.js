import React, { useEffect, useState } from 'react';
import './components/empmansys.css';
import data from './components/data.json';
import EmployeeDetails from './components/EmployeeDetails';
import { AddForm } from './components/AddForm';
import { EmployeeContext } from './context/employeeContext';


export default function EmpManSys() {
  const [empData, setEmpData]=useState([]);
  const [selEmp, setSelEmp]=useState('');
  const [tougleForm, setTougleForm]=useState(false);

  useEffect(()=>{
    setEmpData(data)
  },[])
 

const handleSelcet = (id)=>{
  setSelEmp(empData.filter((emp)=>id===emp.id))
};

const handleAddEmp =()=>{
  setTougleForm(true) 
};

const handleDelete = (id) => {
  const updatedEmpData = empData.filter((emp) => emp.id !== id);
  setEmpData(updatedEmpData);
  setSelEmp('');
};
  return (
    <>
    <h1>Employee Management System</h1>
    {
      tougleForm ?
      (
        <div className='popup'>
      <div className='form'>
        <EmployeeContext.Provider value={{setTougleForm, empData, setEmpData }}>
          <AddForm/>
          {/* <AddForm setTougleForm={setTougleForm} empData={empData} setEmpData={setEmpData}/> */}
        </EmployeeContext.Provider>
      </div>
      </div>
      )
       :
      (
      <>
        <div className='tilte'>
        <span className='empListTitle listTitle'>
                Employee List
        </span>
        <span className='empDetailTitle detailsTilte'>
                Employee Details
        </span>
    </div>
    <div className='system'>
        <span className='list' >
        {empData.map((item)=>{
        return(
        
        <div className='listdiv' key={item.id}>
        <ul  className= 'listName' 
        onClick={()=>handleSelcet(item.id)}>
            <span className='name'>
            {item.firstName}
            </span> 
        </ul>
        <button 
              className='deletBtn'
              onClick={()=>handleDelete(item.id)}
              >
              X
        </button>
        </div>

        
        )
        })}
             
        </span>
        <span className='details'>
         {selEmp && <EmployeeDetails selEmp={selEmp}/>}
        </span>
    </div>
    <button 
      className='add' 
      onClick={handleAddEmp}>
        Add Employee
    </button>

      </>
      )
      
    }

    </>
  )
}

