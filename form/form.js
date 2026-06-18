const names = document.getElementById("name");
const error1 = document.getElementById("erro1");
const phones = document.getElementById("phone");
const emails = document.getElementById("email");

function validateName() {
  if (names === "") {
    error1.textContent = "please enter"
  }
}

function handleSubmit(e){
  e.preventDefault();
  alert("Form Submitted");
}