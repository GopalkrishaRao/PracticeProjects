import React, {useState} from 'react';
import './joke.css'

export default function RandomJoke() {
  const [joke, setJoke]=useState('');
  const [jList, setJlist]= useState([]);

  let url= 'https://api.chucknorris.io/jokes/random';
  const fetchJoke=async (url)=>{
    try{
      const response= await fetch(url);
      const data= await response.json();
      setJoke(data.value)
    }catch(e){
      console.log(e);
    }
  }
  
  const handleAdd =()=>{
    setJlist([{id:Date.now(), value:joke}, ...jList])
  };

  const handleDelete=(id)=>{
    setJlist(jList.filter((item=>item.id!==id)))
  };
  
  return (
    <>
    <h1>RandomJoke</h1>
    <p>
      {joke}
      <button onClick={handleAdd}>Add</button>
    </p>
    <button onClick={()=>fetchJoke(url)}>Get a Joke</button>
    <div>
      {jList.map((item)=>{
        return (
          <ul key={item.id}>
            <li>
              {item.value}
            </li>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </ul>
        )
      })}
    </div>
    </>
  )
}
