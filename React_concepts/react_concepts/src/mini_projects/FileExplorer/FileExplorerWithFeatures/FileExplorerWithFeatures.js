import React, { useState } from 'react'
import explorer from './components/data/folderData'
import Folder from './components/Folder';
import useTraverseTree from './components/hooks/useTraverseTree';

const FileExplorerWithFeatures = () => {
    const [explorerData, setExplorerData]=useState(explorer);

    const {insertNode}=useTraverseTree();

    const handleInsertNode=(folderId, item, isFolder)=>{
        const finalTree = insertNode(explorerData, folderId, item , isFolder)
        setExplorerData(finalTree);
    }

  return (
<>
<div className='fileExplorer'>
    <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>

</div>
</>
    )
};

export default FileExplorerWithFeatures;
