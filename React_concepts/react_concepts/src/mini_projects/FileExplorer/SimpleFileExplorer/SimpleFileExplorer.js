import React, { useState } from 'react'
import explorer from './components/data/folderData'
import Folder from './components/Folder';

const SimpleFileExplorer = () => {
    const [explorerData, setExplorerData]=useState(explorer);
  return (
<>
<div className='fileExplorer'>
    <Folder explorer={explorerData}/>

</div>

</>
    )
};

export default SimpleFileExplorer;
