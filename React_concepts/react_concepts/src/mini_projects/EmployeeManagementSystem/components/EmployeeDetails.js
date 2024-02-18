import React from 'react'

export default function EmployeeDetails({selEmp}) {
  return (
    <>
    <div className='empDetails'>
        <img 
            src={selEmp[0].imageUrl} 
            alt="employeeImage" 
            className='empImg'/>
        <h3 className='empName'>
            Name: {selEmp[0].firstName} {selEmp[0].lastName}
        </h3>
        <h3>
            Id: {selEmp[0].id}
        </h3>
        <h3>
            eMail: {selEmp[0].email}
        </h3>
        <h3>
            Number: {selEmp[0].contactNumber}
        </h3>
        <h3>
            Age: {selEmp[0].age}
        </h3>
        <h3>
            DOB: {selEmp[0].dob}
        </h3>
        <h3>
            Salary: {selEmp[0].salary}
        </h3>
        <h3>
            Address: {selEmp[0].address}
        </h3>
    </div>
    </>
  )
}
