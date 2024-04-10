import React, { useEffect, useState } from 'react';

const useDebounce = (input, delay=500)=>{
    const [debounceValue, setDevounceValue]=useState("");
    useEffect(()=>{

        const timer= setTimeout(()=>{
            setDevounceValue(input)
        },delay);

        return ()=>clearTimeout(timer)

    },[input, delay])

    return debounceValue;
};


export default function FetchCountry() {
    const [country, setCoutry]=useState("");
    const [contDet, setContDet]=useState([]);
    const debounceValue = useDebounce(country);

    
    const handleInputChange=(e)=>{
        setCoutry(e.target.value)
    };

    const fetchData=async(countryName)=>{
        const data= await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const res= await data.json();
        setContDet(res);
        console.log(contDet);
    }

    useEffect(()=>{
        fetchData(debounceValue)
    },[debounceValue])

   return(
    <>
    <h2>Search Country</h2>
    <input 
        type='text'
        placeholder='Enter a country'
        onChange={handleInputChange}
        />
    {
        contDet.length ? (
        <div>
            {contDet[1].capital[0]}
        </div>):(
            <h2>Enter county name to get Details</h2>
        )
    }
    
    </>
   )
}
