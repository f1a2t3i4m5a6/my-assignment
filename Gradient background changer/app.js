function getRandomColor(){
    const letters="0123456789ABCDEF";
    let color ="#";
    for(
        let i=0;i <6;i++){
            color+=letters[Math.floor(Math.random()*16)]
        }
        return color;
}
function changeBackground(){
   let color1 = getRandomColor();
      let color2 = getRandomColor();

      document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
      document.getElementById("codes").textContent=`${color1} → ${color2}`;
}
