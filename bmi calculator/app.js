 const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit" , function(e){
e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
 if(!weight || weight <= 0 || isNaN(weight)){
        results.textContent = "Please enter the valid value"
    }
    else if(!height || height <= 0 || isNaN(height)){
        results.textContent = "Please enter the valid value"
    }
  else {
    const bmi = (weight / ((height/100)**2)).toFixed(2);
    results.innerHTML = 'your BMI is ${bmi}';
  }})
