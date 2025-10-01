const randomGenerator = ()=>{
    let numberGenerate = Math.ceil(Math.random()*20)
    return numberGenerate
}
let checkNumber = randomGenerator()
console.log(checkNumber)
let checkHandler = ()=>{
    let inputValue = document.getElementById("inputValue")
    let victory=document.getElementById("victory")
    let score =document.getElementById("score")
     let highScore = document.getElementById("highScore")
      let questionMark =document.getElementById("questionMark")
      let body=document.querySelector("body")

      if(inputValue.value==checkNumber){
        questionMark.innerHTML=checkNumber
        victory.innerHTML="victory!"
        score.innerHTML= +score.innerHTML+1
        highScore.innerHTML=+score.innerHTML
        inputValue.value=''
      
      setTimeout(()=>{
        questionMark.innerHTML="?"
        victory.innerHTML="Guess Number...."
        score.innerHTML= 20
        highScore.innerHTML= 0
        inputValue.value=''
      },3000
    )
}
 else if(inputValue.value>checkNumber){
        victory.innerHTML="You lost,OOps very high!"
        score.innerHTML= +score.innerHTML-1
        highScore.innerHTML=+score.innerHTML
        inputValue.value=''
    }
    else{
        victory.innerHTML="You lost,OOps very low!"
        score.innerHTML= +score.innerHTML-1
        highScore.innerHTML=+score.innerHTML
        inputValue.value=''
    }
}
let keyHandler=()=>{
    inputValue=document.getElementById("inputValue")
    if(inputValue.value.length>=2){
        inputValue.value=inputValue.value.slice(0,2)
        console.log(inputValue.value)
    }
}
const againHandler=()=>{
    checkNumber=randomGenerator()
    console.log(checkNumber)
    alert("New game is started successfully!")
}
