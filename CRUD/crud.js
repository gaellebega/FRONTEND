const inputBox=document.getElementById("input-value");
const listContainer=document.getElementById("list-container");

function addTask(){
  if(inputBox.value===''){
    alert("You must write something!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
  }
}