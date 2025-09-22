let seeTimer = document.getElementById("timer");
let timer;
let reaminingTime = 25*60;
function updateForSee(){
    let minutes = Math.floor(reaminingTime/60);
    let seconds = reaminingTime%60;
    seeTimer.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart()}`
}

function startTimer() {
    if(!timer){
        timer = setInterval(()=>{
            if(reaminingTime>0){
                reaminingTime--;
                updateForSee()
            }else{
                clearInterval(timer)
                timer = null;
            }
        },1000);
    }
}
function stopTimer(){
    clearInterval(timer);
    timer = null
}
function resetTimer(){
    stopTimer();
    reaminingTime = 25*60;
    updateForSee()
}
function shortBreakTimer(){
    stopTimer();
    reaminingTime = 5*60;
    updateForSee()
}
function longBreakTimer(){
    stopTimer();
    reaminingTime = 15*60;
    updateForSee()
}
updateForSee()