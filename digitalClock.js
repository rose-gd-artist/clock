let clock = document.getElementById("clock");
let color = document.getElementById("outermostDiv");
let hourColor = document.getElementById("hourColor");
let minuteColor = document.getElementById("minuteColor");
let secondColor = document.getElementById("secondColor");

function clockTime() {
  let d = new Date();
  let h = d.getHours();
  h = (h>12 ? h-12 : (h!=0 ? h : 12)).toString().padStart(2, '0');
  let m = d.getMinutes().toString().padStart(2, '0');
  let s = d.getSeconds().toString().padStart(2, '0');
  let AMorPM = d.getHours()<12 ? "AM" : "PM";

  document.getElementById("AMorPM").innerText = AMorPM;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#"+randomColor;
  document.getElementById("minuteColor").style.backgroundColor = "#"+randomColor;
    
  setTimeout("clockTime()", 1000)
}
clockTime()



