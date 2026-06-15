const button=document.getElementById("btn")
const seeing=document.getElementById("result")
button.addEventListener("click",()=>{
  seeing.textContent="Button Clicked";
});


const input=document.getElementById("inputBox")
const outputBox=document.getElementById("output")

input.addEventListener("keydown",(e)=>{
  outputBox.textContent="you pressed"+e.key;
});









const themessage=document.getElementById("mymessage");
const theout=document.getElementById("result")
themessage.addEventListener("keyup",(e)=>{
  console.log("keyup:",e.key);
})
