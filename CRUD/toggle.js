const darkBtn = document.getElementById("darkBtn");
const statusBtn = document.getElementById("statusBtn");
const selectBtn = document.getElementById("selectBtn");
const showNotesBtn = document.getElementById("showNotesBtn");
const boldBtn = document.getElementById("boldBtn");
const fontBtn = document.getElementById("fontBtn");
const blurBtn = document.getElementById("blurBtn");
const taskBtn = document.getElementById("taskBtn");
const dropdownBtn = document.getElementById("dropdownBtn");
const animateBtn = document.getElementById("animateBtn");

const status = document.getElementById("status");
const profileCard = document.getElementById("profileCard");
const notes = document.getElementById("notes");
const secret = document.getElementById("secret");
const task1 = document.getElementById("task1");
const resources = document.getElementById("resources");
const arrow = document.getElementById("arrow");
const ball = document.getElementById("ball");

/* Dark Mode */
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* Online Status */
statusBtn.addEventListener("click", () => {
  status.classList.toggle("online");

  if(status.classList.contains("online")){
    status.textContent = "Online";
  }else{
    status.textContent = "Offline";
  }
});

/* Select Card */
selectBtn.addEventListener("click", () => {
  profileCard.classList.toggle("selected");
});

/* Show Hide Notes */
showNotesBtn.addEventListener("click", () => {
  notes.classList.toggle("hidden");
});

/* Bold Text */
boldBtn.addEventListener("click", () => {
  notes.classList.toggle("bold");
});

/* Increase Font Size */
fontBtn.addEventListener("click", () => {
  notes.classList.toggle("big-text");
});

/* Blur Information */
blurBtn.addEventListener("click", () => {
  secret.classList.toggle("blur");
});

/* Complete Task */
taskBtn.addEventListener("click", () => {
  task1.classList.toggle("completed");
});

/* Dropdown */
dropdownBtn.addEventListener("click", () => {
  resources.classList.toggle("hidden");
  arrow.classList.toggle("rotate");
});

/* Animation */
animateBtn.addEventListener("click", () => {
  ball.classList.toggle("bounce");
});