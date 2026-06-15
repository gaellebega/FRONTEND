// TASK 1
let container1 = document.getElementById("container1");

const newElement = document.createElement("h1");
newElement.innerHTML = "Welcome to my website";

container1.appendChild(newElement);

// TASK 2
const box = document.getElementById("box");

const anotherElement = document.createElement("button");
anotherElement.innerHTML = "Click Me";

box.appendChild(anotherElement);

// TASK 3
const container = document.getElementById("container");

const paragraph = document.getElementById("id");

// Uncomment if you want to remove the paragraph
// container.removeChild(paragraph);

// TASK 4
const oldText = document.getElementById("old-text");

if (oldText) {
  const newHead = document.createElement("h2");
  newHead.innerHTML = "New Text";

  oldText.parentNode.replaceChild(newHead, oldText);
}

// Change first paragraph text
document.getElementsByTagName("p")[0].innerHTML = "Hello";

// Change image source (only if image exists)
const image = document.getElementById("my-image");

if (image) {
  image.src = "landscape.jpg";
}

// Change CSS
document.getElementById("my-new").style.backgroundColor = "red";

// Form Validation
function validateMe() {
  let x = document.getElementById("number").value;
  let message;

  if (isNaN(x) || x < 1 || x > 10) {
    message = "Input not Valid";
  } else {
    message = "Input is Valid";
  }

  document.getElementById("error").innerHTML = message;
}

const form=document.querySelector("form")
form.addEventListener("submit",()=>{
alert("form successfully submitted")
})