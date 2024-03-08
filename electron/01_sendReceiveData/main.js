const { app, BrowserWindow,ipcMain } = require('electron/main')
const path = require('node:path')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.sqlite');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js'),
      nodeIntegration: true
    }
  })
  win.loadFile('./UI/index.html');
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
});


// On click of btn fetch data and from db send it to display
ipcMain.on('fetchData', (event, message) => {
  console.log(message); // Print the message from the renderer process
  if(message == "requestDataList"){
    let result  = [];
      db.all("SELECT * FROM devices", (error, rows) => {
        rows.forEach((row) => {
        result.push(row);
        })
        event.reply("requestedData",result) //Send the requesed data fetched from database
      });
  };
});



// add new data to db
ipcMain.on('pushData', (event, inputData)=>{
  // console.log(inputData);

  db.run(
    'INSERT INTO devices ( name, data) VALUES ( ?, ?)',
    [ inputData.name, inputData.data],
    (err) => {
      if (err) {
          console.error(err.message)
          let errorMessage = "Error inserting record from main";
          event.reply("insertionStatus", errorMessage);
      }
      let message="Record inserted successfully to database"
      console.log(message);
      // send back success message
      event.reply("insertionStatus",message)
    }
  );
});


// delete selectd row from db
ipcMain.on("deleteSelecteRow", (event, selectdRowId)=>{
  // console.log(selectdRowId);
  db.run("DELETE FROM devices WHERE id = ?", [selectdRowId], (err)=>{
      if(err){
        console.error(err.message);
      }
      console.log("deleted successfully row ", selectdRowId);
  }); 

});

// update db with updated database
ipcMain.on("updateData", (evet, updatedData)=>{
  // console.log(updatedData);
  db.run('UPDATE devices SET name = ?, data = ? WHERE id = ?',
  [updatedData.name, updatedData.data, updatedData.id], 
  (err) => {
      if (err) {
          console.error(err.message);
          let errorMessage = "Error updating record in the database";
          // event.reply("updateStatus", errorMessage);
      } 
      console.log("upadated data");
  })

});


// close window
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  };
});