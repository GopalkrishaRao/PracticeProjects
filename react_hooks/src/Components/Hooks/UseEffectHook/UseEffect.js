import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../Card/Card';


export default function UseEffect() {
    
  const [details, setDetails] = useState({});
    
    const fetchDetails = async ()=>{
      const {data} = await axios.get('https://randomuser.me/api/');
      // const detailsofObject= data.results[0];
      // setDetails(detailsofObject);
      setDetails(data.results[0]);
    }

    // fetchDetails()
    useEffect(()=>{
        fetchDetails()
    }, [])
  return (
    <>
    <Card details={details}/>
    </>
  )
}
