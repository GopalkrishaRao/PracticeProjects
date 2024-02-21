import React, { useState } from 'react'
import explorer from './components/data/folderData'
import Folder from './components/Folder';
export const FileExplores = () => {
    const [explorerData, setExplorerData]=useState(explorer);
  return (
<>
<div className='fileExplorer'>
    <Folder explorer={explorerData}/>

</div>

</>
    )
}
