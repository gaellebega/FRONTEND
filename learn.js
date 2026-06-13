// TASK1
const container=document.getElementById("container1")
const newElement=document.createElement("h1")
newElement.innerHTML="Welcome to my website"
// missing to add the new element
container.appendChild(newElement)

// TASK2
const mybutton=document.getElementById("box")
const anotherElement=document.createElement("button")
anotherElement.innerHTML="Click Me"
// add the new element
mybutton.appendChild(anotherElement)

// TASK3
const container=document.getElementById("container")
// tagname it return the colloection of the tagnames so tobe more specific you have to say and give it the class name or the id
const child=document.getElementsByClassName("p")
container.removeChild(child)

// TASK 4
// remeber to define the parent and the child
const parent=dosumnet.getElementById("container")
const child =document.getElementById("old-text")
const newhead=document.createElement("h2")
newhead.innerHTML="New Text"
parent.replaceChild(newhead,child);