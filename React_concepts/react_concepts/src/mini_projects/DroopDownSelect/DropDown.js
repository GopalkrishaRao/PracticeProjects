import React, {useState } from 'react';
import {countries} from './components/countryList'

export default function DropDown() {
    const [coun, setCountry]=useState(0);

    const handleChange=(e)=>{
        const selectedCountryIndex = e.target.value - 1; 
        setCountry(selectedCountryIndex); 
    }

  return (
    <>
        <div>Drop Down</div>
        <select onChange={handleChange} >
            {
                countries.map((country)=>{
                    return(
                        <option 
                            key={country.id}
                            value={country.id}
                            >
                            {country.name}
                        </option>
                    )
                })
            }
        </select>
        <select>
            {
                countries[coun].cities.map((city,i)=>{
                    return(
                        <option key={i}>
                            {city}
                        </option>
                    )
                }
                )
            }
        </select>
    </>
  )
};