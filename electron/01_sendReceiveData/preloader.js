const { contextBridge, ipcRenderer } = require('electron')



// Expose the IPC functions to the renderer process
contextBridge.exposeInMainWorld('electronIPC', {

  sendToMain: (message) => {
    ipcRenderer.send('fetchData', message); // Send a message to the main process to request data 
  },

  receiveFromMain: (callback) => {
    ipcRenderer.on('requestedData', (event, arg) => {
      callback(arg); // Receive a message from the main process and execute the callback function
    });
  },


  sendInputDataToMain:(inputData)=>{
    ipcRenderer.send('pushData', inputData) //send input data to main to insert into db
  },

  receiveInsertionStatus:(stauts)=>{
    ipcRenderer.on('insertionStatus', (event, arg)=>{
      stauts(arg); // Resceive success or failure message from main aftre insertion of data
    })
  },


  sendRowIdToDelete:(idToDelte)=>{
   ipcRenderer.send("deleteSelecteRow", idToDelte) // send id of row to main to delete from db
  },

  sendUpdatedData:(updatedData)=>{
    ipcRenderer.send("updateData", updatedData) //send updated data to main to update db
  }

});