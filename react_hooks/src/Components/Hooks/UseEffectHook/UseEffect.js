import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../Card/Card';

export default function UseEffect() {
    
  // use state for random user
  const [details, setDetails] = useState({});

    const fetchDetails = async ()=>{
      const {data} = await axios.get('https://randomuser.me/api/');
      // const detailsofObject= data.results[0];
      // setDetails(detailsofObject);
      setDetails(data.results[0]);
    };

    const [chuckjoke, setChuckNoris] = useState({});
    const fetchChuckNorrisJoke = async ()=>{

      const joke = await axios.get('https://api.chucknorris.io/jokes/random');
       setChuckNoris(joke.data);
    }

    // fetchDetails()
    useEffect(()=>{
        fetchDetails()
        fetchChuckNorrisJoke()
    }, [])
  return (
    <>
    <Card details={details} joke={chuckjoke}/>
    </>
  )
}
