//CHAPTER #01
//Question#1
alert("Welcome to our website!");

    


  //CHAPTER #02
  let username="fatima";
  let myName="FATIMA HANIF";
  let message="Hellow world";
 alert(message);
  let name="John Doe";
  let age="15";
  let grade="Certified Mobile Application Development";
  alert(name)
  alert(age)
  alert(grade)
  let msg="PIZZA\nPIZZ\nPIZ\nPI\nP"
  alert(msg);
  let email="example@example.com"
  alert("My email address is"+email)
  let book="A smarter way to learn JavaScript"
  alert("I am trying to learn from the book"+book)
  document.write("Yah! I can write HTML content through javascript" + "<br>")
let q9="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(q9)
//CHAPTER :03
let old="15"
alert("I am "+old +" years old")
let arrival= localStorage.getItem("arrival")
if(arrival===null){
  arrival=1;
}else{
  arrival=Number(arrival)+1;
}
localStorage.setItem("arrival",arrival);
document.getElementById("message").innerText=
"You have visited this site" + arrival + "times.";
var birthYear = 1990;
document.write("My bieth year is" + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear) + "<br>");

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
 var text = visitorName + " ordered " + quantity + " " + productTitle + "(s) on Bint e hanif Clothing store.";
alert(text);
//CHAPTER:04
var me = "FATIMA HANIF", clas = "INTERMEDIATE", sub = "(MATHEMATICS)";
var messag = me + " completed " + clas + "in Pre-engineering " + sub + "at GOVT DEGREE CLG FOR WOMEN, NAZIMABAD.";
alert(messag);
//5 LEGAL VARIABLES NAME
var userName="fatima"
var totalAmount="1000"
var isAvailable="abcd..."
var _userData="egyd"
var my_var_123="bghy"
//5 illegal variable name
//var me23="abc"
//var for="abd"
//var let="vbg"
//var var="bhn"
//var myname!="jmk"
const heading =document.createElement('h4');
heading.textContent="Rules for Naming JS Variables";

const line1=document.createElement('p');
line1.innerHTML="b) Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>underscores</strong>, and <strong>dollar signs</strong>.<br> For example: <strong>$my_1stVariable</strong>";

const line2=document.createElement('p');
line2.innerHTML="c) Variables must begin with a <strong>letter</strong>, <strong>underscore</strong>, or <strong>dollar sign</strong>.<br> For example: <strong>$name</strong>, <strong>_name</strong>, or <strong>name</strong>";

const line3=document.createElement('p');
line3.innerHTML="d) Variable names are case <strong>sensitive</strong>.";

const line4=document.createElement('p');
line4.innerHTML="e) Variable names should not be JS <strong>reserved keywords</strong>.";

document.body.appendChild(heading);
document.body.appendChild(line1);
document.body.appendChild(line2);
document.body.appendChild(line3);
document.body.appendChild(line4);
//CHAPTER :05
var value1= 5;
var value2= 3;
var sum=value1+value2;
document.write(" Sum of " + value1 + " and " + value2 + " is " + sum +"<br>");

var diff=value1-value2;
document.write(" Difference of " + value1 + " and " + value2 + " is " + diff+"<br>");
var multiply=value1*value2;
document.write(" Multiplication of " + value1 + " and " + value2 + " is " + multiply+"<br>");
var divide=value1/value2;
document.write(" Division of " + value1 + " and " + value2 + " is " + divide+"<br>");
var modulus=value1%value2;
document.write(" Modulus of " + value1 + " and " + value2 + " is " + modulus+"<br>");

var myWork;
    document.write("Value after variable declaration is: " +  myWork + "<br>");
     myWork = 5;
    document.write("Initial value: " +  myWork + "<br>");
 myWork++;
    document.write("Value after increment is: " +  myWork + "<br>");
    myWork =  myWork + 7;
    document.write("Value after addition is: " +  myWork + "<br>");
    myWork--;
    document.write("Value after decrement is: " + myWork + "<br>");
    var remainder =  myWork % 3;
    document.write("The remainder is: " + remainder + "<br>");

var cost=600;
var totalPrice= cost*5;
document.write(" Cost of one movie ticket is " + cost + "PKR." + "<br>")
document.write("Cost of buying 5 tickets to a movie is " + totalPrice + " PKR<br>")

var table=4;
document.write("<h2>Multiplication Table of " + table + "</h2>");
for(var i=1; i<=10;i++){
  document.write(table + "X" + i +"=" + (table*i) + "<br>")
}
var centigrade=25;
var farenheit= (centigrade * 9/5) + 32;
document.write(centigrade + "C is " + farenheit +"F<br>")

var farenheitT=70;
var centigradeT=(farenheitT - 32) * 5/9;
document.write(farenheitT + "F is " + centigradeT +"C<br>")
var costmaterial1=650;
var costmaterial2=100;
var quanmaterial1=3
var quanmaterial2=7
var charges=100
var totalAmount=(costmaterial1*quanmaterial1)+(costmaterial2*quanmaterial2)+charges+"<br>";
document.write("<h2>SHOPPING CART");
document.write("<p>Price of Item 1 is " + costmaterial1 + "</p>");
    document.write("<p>Quantity of Item 1 is " + quanmaterial1 + "</p>");
    document.write("<p>Price of Item 2 is " + costmaterial2 + "</p>");
    document.write("<p>Quantity of Item 2 is " + quanmaterial2 + "</p>");
    document.write("<p>Shipping Charges " + charges + "</p>");
    document.write("<h3>Total cost of your order is " + totalAmount + "</h3>");

     var totalMarks = 500;
    var obtainedMarks = 410;
    var percentage = (obtainedMarks / totalMarks) * 100;
    document.write("<p>Total Marks: " + totalMarks + "</p>");
    document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
    document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3><br>");

    var usdToPkr=104.80;
    var riyalToPkr= 28;
    var dollar=10
    var riyal=25
    var totalPkr=(usdToPkr*dollar)+(riyalToPkr*riyal);
     document.write("<p>The total Currency in PKR: <b>" + totalPkr + "</b></p><br>");

var number=7
var result= ((number+5)*10)/2;
document.write("<p>Initial Number: " + number + "</p>");
    document.write("<p>Result after ((num + 5) * 10) / 2 = " + result + "</p>");

    var recentYear=2025;
    var birthYear=2004;
    var age1 = recentYear - birthYear;
    var age2 = age1 - 1;
    document.write("<p>Current Year: " + recentYear + "</p>");
    document.write("<p>Birth Year: " + birthYear + "</p>");
    document.write("<h3>They are either " + age2 + " or " + age1 + " years old.</h3>");

    var radius =20
    var pi=3.142;
    var circumference=2*pi*radius;
    var area=pi*radius*radius;
    document.write("<p>Radius of circle: " + radius + "</p>");
    document.write("<p>The circumference is " + circumference + "</p>");
    document.write("<p>The area is " + area + "</p><br>");

    var snack = "Chocolate Chip Cookies;"
    var old1 = 20;
    var old2 = 80;
    var perDay = 2;
    var totalNeeded = (old2 - old1) * 365 * perDay;
    document.write("<p>Favorite Snack: " + snack + "</p>");
    document.write("<p>Current Age: " + old1 + "</p>");
    document.write("<p>Estimated Maximum Age: " + old2 + "</p>");
    document.write("<p>Amount Per Day: " + perDay + "</p>");
    document.write("<h3>You will need " + totalNeeded + " " + snack + 
     " to last you until the ripe old age of " + old2 + ".</h3>");
     //CHAPTER :06-09
     var a=2, b=1;
     var results=--a- --b+ ++b + b--;
     document.write("<p> a is " + a + "<br>b is" + b + "</p>");
     document.write("<h3>Result is " + results +".</h3>");
var userName = prompt("Please enter your name.")
alert("Hellow," + userName + "! Welcome!")
document.write("Hellow,"+ userName + " ! Have a good day.")

var numb = prompt("Enter a number for Multiplication table:","5")
if(numb === null || numb === ""){
  numb=5
} else{
  numb=Number(numb);
}
document.write("<h2>Multiplication tablr of " + numb +"</h2><br>")
for(var i=1;i<=10;i++){
  document.write(numb+ "X" + i+"=" +(numb*i)+"<br>")
}
var sub1=prompt("Enter first subject name:")
var sub2=prompt("Enter second subject name:")
var sub3=prompt("Enter third subject name:")
var totalMarksPerSubject=100;
var mars1=Number(prompt("Enter obtained marks for"+sub1))
var mars2=Number(prompt("Enter obtained marks for"+sub2))
var mars3=Number(prompt("Enter obtained marks for"+sub3))
var totalObt=mars1+mars2+mars3
var totalMars=totalMarksPerSubject*3;
var ptage=(totalObt/totalMars)*100;
document.write("<h2>Marks Sheet</h2>")
document.write("<table border='1' cellspacing='0' cellpdding='8'>")
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Persentage</th></tr>")
document.write("<tr><td>"+sub1+"</td><td>"+totalMarksPerSubject+"</td><td>"+mars1+"</td><td>"+(mars1/totalMarksPerSubject*100).toFixed(2)+"%</td></tr>")
document.write("<tr><td>"+sub2+"</td><td>"+totalMarksPerSubject+"</td><td>"+mars2+"</td><td>"+(mars2/totalMarksPerSubject*100).toFixed(2)+"%</td></tr>")
document.write("<tr><td>"+sub3+"</td><td>"+totalMarksPerSubject+"</td><td>"+mars3+"</td><td>"+(mars3/totalMarksPerSubject*100).toFixed(2)+"%</td></tr>")
document.write("<tr><th>Total</th><th>"+totalMars+"</th><th>"+totalObt+"</th><th>"+ptage.toFixed(2)+"%</th></tr>");
document.write("</table>")
var city=prompt("Enter your city name:")
if(city.toLowerCase()==="karachi"){
  alert("Welcome to city of lights.")
  document.write("Welcome to city of lights.<br>")
}else{
  alert("Welcome to"+city)
  document.write("Welcome to"+city+"<br>")
}
var gender=prompt("Enter your gender(male/female):")
if(gender.toLowerCase()==="male"){
  alert("Good Morning sir.")
  document.write("Good Morning sir.<br>")
}
else if(gender.toLowerCase()==="Female"){
  alert("Good Morning Madam.")
  document.write("Good Morning Madam.<br>")
}
else{
  alert("Good Morning!")
  document.write("Good Morning!<br>")
}
var color = prompt("Enter Traffic signal color(red,yellow,green):")
color=color.toLowerCase();
if (color==="red"){
  document.write("<h2>Signal color: Red</h2>")
  document.write("Message: Must stop<br>")
}
else if(color==="yellow"){
   document.write("<h2>Signal color: Yellow</h2>")
  document.write("Message: Ready to move<br>")
}
else if(color==="Green"){
   document.write("<h2>Signal color: Green</h2>")
  document.write("Message: Move now<br>")
}
else{
  document.write("<h2>Invalid coloured entered</h2>")
}
var fuel=prompt("Enter remaining fuel in car(in litres):")
fuel=Number(fuel);
if(fuel<0.25){
  alert("Please refill the fuel in your car")
  document.write("Please refill the fuel in your car<br>")
}
else{
  alert("You have enough fuel")
  document.write("You have enough fuel<br>")
}
//the end
