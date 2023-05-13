import React, { useContext } from 'react'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { todoContext } from '../context/context';

function SearchFilter() {
    const {searchVal, setSearchVal} = useContext(todoContext)

  return (
    <>
    {/* css from index.css */}
    <div className='searchFilter'>

      {/* Search Section */}
     <div className='search'>

        <input 
            type="text"
            placeholder="Search Task"
            id='search'
            className='input'
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
             />

        <button className='btn'>
        <MagnifyingGlassIcon strokeWidth={2} height={24} width={24}/>
        </button>
    </div> 

    {/* Filter Section */}
    <button className='btn'>
            <AdjustmentsHorizontalIcon strokeWidth={2} height={24} width={24}/>
    </button>  
   </div>
    </>
  )
}

export default SearchFilter