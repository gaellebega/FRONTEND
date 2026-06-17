let hours=0;
let minutes=0;
let seconds=0;
let myInterval=null;
// this allows everything to work together so when seconds are 60 then we get to min when minutes are 60 then add again 
function updateTimer(){
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
};


// start the timer
document.getElementById("start").addEventListener("click",()=>{
  // this means if my interval is emapty or equal to the null
  if(!myInterval){
    myInterval=setInterval(updateTimer,1000)
  }
})


//STOP THE TIMER

document.getElementById("stop").addEventListener("click",()=>{
  clearInterval(myInterval);
  myInterval=null;
});

//RESET THE timer
document.getElementById("reset").addEventListener("click",()=>{
  clearInterval(myInterval);
  myInterval=null;

  hours=0;
  minutes=0;
  seconds=0;

  document.getElementById("hours").textContent="00";
  document.getElementById("minutes").textContent="00";
  document.getElementById("seconds").textContent="00"
});

// RESUME

document.getElementById("resume").addEventListener("click",()=>{
  if(!myInterval){
    myInterval=setInterval(updateTimer,1000)
  }
});