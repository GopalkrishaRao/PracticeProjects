import React from 'react'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function SearchFilter({search, filter}) {
   
  return (
    <>
    {/* css from index.css */}
    <div className='searchFilter'>
     <div className='search'>
        <input 
            type="text"
            placeholder="Update Task"
            id='search'
            className='input'
            onInput={search}
             />
            
        <button className='btn'onClick={filter}>
        <MagnifyingGlassIcon strokeWidth={2} height={24} width={24}/>
        </button>
        
    </div> 
    <button className='btn'>
            <AdjustmentsHorizontalIcon strokeWidth={2} height={24} width={24}/>
    </button>  
   
   </div>
    </>
  )
}

export default SearchFilter