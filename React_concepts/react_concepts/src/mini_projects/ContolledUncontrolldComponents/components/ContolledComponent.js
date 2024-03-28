import React, {useState} from 'react'

export default function ContolledComponent() {
  const [name, setName]=useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <>
    <div>Contolled Component</div>
    <form >
      <input
        value={name}
        placeholder='Enter Input'
        onChange={e=>setName(e.target.value)}
      />
      <input
        type='submit'
        onClick={handleSubmit}
        />
     </form>
     <div>Outpur of Controlled Component: <br/>
          {name}
     </div>
     <br/>
     <br/>
     <br/>
    </>
  )
}
