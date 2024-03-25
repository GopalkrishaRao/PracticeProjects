import React from 'react';
import './components/selectGrid.css';
import SelectableGrid  from './components/SelectableGrid';

export default function SelectGrid() {
  return (
    <>
        <div>SelectGrid</div>
        <SelectableGrid rows={10} cols={10}/>
    </>
  )
}
