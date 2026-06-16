let hours=0;
let minutes=0;
let seconds=0;
let myInterval=null;
setInterval(()=>{
  seconds++;
  if(seconds===60){
    seconds=0;
    minutes++;
  }
  if(minutes===60){
    minutes=0;
    hours++;
  }
  document.getElementById("hours").textContent=
  String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=
  String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=
  String(seconds).padStart(2,"0");
},1000);

//STOP THE TIMER

document.getElementsById("stop").addEventListener("click",()=>{
  clearInterval(myInterval);
  myInterval=null;
});
// start the timer

document.getElementById("start").addEventListener("click",()=>{
  // this means if my interval is emapty or equal to the null
  if(!myInterval){
    myInterval=setInterval(updateTimer,1000)
  }
})

//RESET THE timer


document.getElementById("reset").addEventListener("click",()=>{
  clearInterval(myInterval);
  myInterval=null;

  hours=0;
  minutes=0;
  seconds=0;

  document.getElementById("hours").textContent="00";
  document.getElementById("minutes").textContent="00";
  document.getElementById("hours").textContent="00"
});