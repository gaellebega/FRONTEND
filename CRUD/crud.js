const inputBox=document.getElementById("input-value");
const listContainer=document.getElementById("list-container");

function addTask(){
  if(inputBox.value===''){
    alert("You must write something!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    // to display the element that was created under the listContainer
    listContainer.appendChild(li);
    // to create the cross icon so that when we delete we are eble to cancel the task
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  // to be able to clear what is in the input box then wehave to amke somsthing like this
  inputBox.value="";
  saveData();
}

listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);


function saveData(){
  // to store  the new data that is added
  localStorage.setItem("add",listContainer.innerHTML);
  // whenever we add any changes then we have to call the save data
}

// we want to display the data when we open the website again then this is how it is madefunc
function showTask(){
  listContainer.innerHTMl=localStorage.getItem("data");
}
showTask();