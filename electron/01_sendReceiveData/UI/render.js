const displayBtn = document.getElementById("displayBtn");
displayBtn.addEventListener("click", send_event_to_Main);
function send_event_to_Main(){
  window.electronIPC.sendToMain("requestDataList"); //send event to main to request data
};
const displayTag=document.getElementById('info');

// form validation
let userInput={ 
                name:"",
                data:""                
              };

// send the input data to main
const addBtn = document.getElementById("addBtn");
const inputName = document.getElementById("inpName");
const inputData = document.getElementById("inpData");

addBtn.addEventListener("click", send_input_data);

function send_input_data(e){
  e.preventDefault(); 
  if(inputName.value && inputData.value){
    userInput.name=inputName.value.toString().trim();
    userInput.data=inputData.value.toString().trim();
    window.electronIPC.sendInputDataToMain(userInput);

    // empty input form
    inputName.value="";
    inputData.value="";
  }else{
    displayTag.innerText = "Invalid data"
  };
};

// function to display data in table form
  const displayData = (datatoDisplay)=>{
    let talbeData="";
    
    datatoDisplay.map((singleRowData)=>{
      talbeData+=`
      <tr id=${singleRowData.id}>
        <td>${singleRowData.id}</td>
        <td class="name">${singleRowData.name}</td>
        <td class="data">${singleRowData.data}</td>
        <td> <button class="editBtn" edit-id=${singleRowData.id}>Edit</button></td>
        <td> <button delete-id=${singleRowData.id}>Delete</button></td>
     </tr>`
    });

    let tableContent=`
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Data</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      ${talbeData}
    </table>`
    return displayTag.innerHTML=tableContent;
  };
  
//send to main 
  window.electronIPC.receiveFromMain((receivedData) => {
    console.log(receivedData);
    displayData(receivedData); //Receive and display the data


    // delete a data row
    const deleteButton= document.querySelectorAll("button[delete-id]");//Gives a nodelist of all delte buttons

    // add clcik event listner
      deleteButton.forEach((button)=>{
        button.addEventListener("click", ()=>{
          const idToDelte = button.getAttribute("delete-id");
          window.electronIPC.sendRowIdToDelete(idToDelte);  //sedn id of row to main to delete that row

          // auto click display data button to show the updated table
          displayBtn.click();
        })
      });

    // Edit and update data
    const editButton= document.querySelectorAll("button[edit-id]");
    // add clickeventlistner
    
    editButton.forEach((button)=>{
      button.addEventListener("click", ()=>{
        const idToEdit = button.getAttribute("edit-id");
        let updatedData={id:idToEdit,
                          name:"",
                          data:""
        };

        const getTable= document.getElementById(idToEdit);
        const getNameField= getTable.getElementsByClassName("name")[0];
        const getDataField=getTable.getElementsByClassName("data")[0];

        if(button.innerText==="Edit"){
          button.style.background="green";
          button.innerText="Save";

          getDataField.style.background="orange";
          getNameField.style.background="orange";

        // Make the fileds editable
          getNameField.contentEditable=true;
          getDataField.contentEditable=true;

        } else {
            updatedData.name=getNameField.innerText.toString().trim();
            updatedData.data=getDataField.innerText.toString().trim();

          // Send updated data to main to updatd db
          window.electronIPC.sendUpdatedData(updatedData);

          // console.log(updatedData);
          displayBtn.click();
        }
      })
    });
});

// show insertion status on main
window.electronIPC.receiveInsertionStatus((insertionStatus)=>{
  console.log(insertionStatus);
  displayTag.innerText=insertionStatus;
});