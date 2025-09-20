function checkPalinrome(){
    let word=document.getElementById('enterword').value
let back='';
for (let i=word.length-1;i>=0;i--){
    back += word[i];
}
let resultdiv = document.getElementById('results');
if(word === back && word !== ''){
    resultdiv.textContent=`${word} is a Palindrome!`;
    resultdiv.style.color ="green";
}else if(word !==''){
    resultdiv.textContent=`${word} is not a Palindrome!`;
    resultdiv.style.color ="red";
}else{
    resultdiv.textContent="Please enter a word";
    resultdiv.style.color ="orange";
}
}