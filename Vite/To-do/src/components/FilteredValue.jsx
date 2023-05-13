import React, { useContext } from 'react';
import { todoContext } from '../context/context';

export default function FilteredValue() {
  const { tasks, searchVal } = useContext(todoContext);

  // Filter based on 'name' property
  const filteredData = tasks.filter((t) => t.name.includes(searchVal)); 

  return (
    <div>
      {filteredData.length === 0 ? 
        (<p>No matching results found.</p>) : 
        (<div>
          {filteredData.map((t) => {
          // Use 'id' as key and display 'name' property
                return <h1 key={t.id}> {t.name}</h1>; 
              })}
          </div>) 
      }
    </div>
  );
}
