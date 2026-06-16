let hours=0;
let minutes=0;
let seconds=0;
setInterval(()=>{
  seconds++;
  if(seconds==60){
    seconds=0;
    minutes++;
  }
  if(minutes==60){
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