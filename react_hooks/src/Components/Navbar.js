import {Link} from 'react-router-dom';
import './Navbar.css'

import React from 'react'

export default function Navbar() {
  return (
    <div className='nav'  > 
        <Link to={'/'} > Home </Link>
        <Link to={'/hooks'}> Hook </Link>
        <Link to={'/contextapi'}> Context API</Link>
    </div>
  )
}
