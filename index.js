const calculate =document.querySelector(".Areaofinput")
const submitSpeed = document.querySelector(".submitWork")

submitSpeed.addEventListener("click",()=>{
  speedDetector(parseInt(calculate.value,10));
});

const speedDetector = (speed) => {
   if(!(speed<0)){
      //speed is exceeding 12 points alert 
  if ((speed - 70) / 5 > 12) {
    alert("licence suspended");
  }
  //speed is less that 70 points alert
  if (speed < 70) {
    alert("ok");
    //speed exceeds 70 alert
  } else {
    alert("points: " + Math.round((speed - 70) / 5));
  }
   }else{
     alert("Invalid speed")
   }
};
