import React, { useEffect, useState } from 'react';


export default function FetchCountry() {
    const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);

  const updateInput = (e) => {
    setCountry(e.target.value);
  };
  const fetchData = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setCountryInfo(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(`https://restcountries.com/v3.1/name/${country}`);
  }, [country]);
  return (
    <div className="App">
      <h1>Country Information</h1>
      <input
        placeholder="Enter Country Name"
        className="inpCou"
        onChange={updateInput}
      />
      <button
        onClick={() =>
          fetchData(`https://restcountries.com/v3.1/name/${country}`)
        }
      >
        Search
      </button>
      <div>
        {countryInfo.length > 0 ? (
          <>
            <p> Name: {countryInfo[1].name.common}</p>
            <p>Capital: {countryInfo[1].capital[0]}</p>
              <img src={countryInfo[1].flags.png} alt="flag" />
            
          </>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}
