import React from 'react'
import SimpleFileExplorer from './SimpleFileExplorer/SimpleFileExplorer';
import FileExplorerWithFeatures from './FileExplorerWithFeatures/FileExplorerWithFeatures';

const FileExplorer = () => {
    
  return (
<>  
    <h2>Simple File Explorer</h2>
    <SimpleFileExplorer/>
    <hr/>
    <h2>File Explorer with Features</h2>
    <FileExplorerWithFeatures/>
</>
    )
};

export default FileExplorer;
