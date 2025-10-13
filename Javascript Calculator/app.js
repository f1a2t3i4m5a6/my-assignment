function setnumber(num){
var inputResult =document.getElementById("inputResult")
var save =document.getElementById("save")
var lastval=inputResult.value.slice(inputResult.value.length-1)
console.log(lastval)

var operator=["+","-","*","/","%"]
if (operator.indexOf(lastval) !== -1 && operator.indexOf(num)  !== -1){
    inputResult.value=  inputResult.value.slice(0,-1)+num
    save.innerHTML=inputResult.value.slice(0,-1)+num
     save.value=  save.value.slice(0,-1)+num
}else{
    inputResult.value+=num
    save.value+=num
    save.innerHTML+=num
}
save.innerHTML+=inputResult.value.slice(inputResult.value.length-1)
}
function del(){
    var inputResult =document.getElementById("inputResult")
var save =document.getElementById("save")
inputResult.value=inputResult.value.slice(0,-1)
save.value=save.value.slice(0,-1)
save.innerHTML=save.innerHTML.slice(0,-1)
}
function clc(){
    var inputResult =document.getElementById("inputResult")
var save =document.getElementById("save")
inputResult.value=''
save.value=''
save.innerHTML=''
}
function getResult(){
    var getResult= document.getElementById("inputResult")
    getResult.value=eval(getResult.value)
}



