const startRamzan=new Date("February 17,2026 00:00:00").getTime();
function animateShip(id,newValue){
  const el=document.getElementById(id)
  if(el.innerText != newValue){
    el.classList.remove("ship")
    el.innerText = newValue
  }

}
function upCountD(){
  const recent = new Date(). getTime();
const dis = startRamzan-recent;
if(dis<0){
document.querySelector(".timer").innerHTML="<h2>🌙 Ramzan Mubarak! 🌙</h2>";
return;
}
const month = Math.floor(dis/(1000*60*60*24*30));
const days =Math.floor((dis%(1000*60*60*24*30))/(1000*60*60*24));
const hours =Math.floor((dis%(1000*60*60*24))/(1000*60*60));
const minutes =Math.floor((dis%(1000*60*60))/(1000*60)); 
const seconds =Math.floor((dis%(1000*60))/(1000));

animateShip("months",month);
animateShip("days",days);
animateShip("hours",hours);
animateShip("minutes",minutes);
animateShip("seconds",seconds);

}
 




  setInterval(upCountD,1000) ;
  upCountD()  ;


    //The end....