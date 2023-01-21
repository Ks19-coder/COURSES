//let students = 20;
//
////students += 1;
////students -= 1;
////students *= 2;
////students /= 2;
//
//let result = (1+2)*(3+4);
//
//console.log(result)

//let username = window.prompt("What's your name?");
//console.log(username)


//ocument.getElementById("myButton").onclick = function(){
// username = document.getElementById("myText").value;
// console.log(username);
// document.getElementById("myLabel").innerHTML = "Hello " + username;
//

//let age = window.prompt("How old are you?")

//console.log(typeof age);
//age = Number(age);
//console.log (typeof age)
//age += 1;//

//console.log ("Happy Birthday! You are ", age, "years old")

//let x;
//let y;
//let z;
//
//x = Number("3.14");
//y = String(3.14);
//z = Boolean("pizza");
//
//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

//const PI = 3.14159;
//let radius;
//let circumference;
//
//radius = window.prompt("Enter the radius of a cricle");
//radius = Number(radius);
//
////PI = 420.69;
//
//circumference = 2 *PI * radius;
//
//console.log("The circumference is:", circumference)

//let x;
//let y = 5;
//let z = 9;//

//let maximum;
//let minimum;//

//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);//

//console.log(maximum);
//console.log(minimum);//
//
//

////x = Math.round(x); this rounds the numer down, even if it is 3.99//

////x = Math.ceil(x); this round the number up, even if it is 3.01//

////x = Math.pow(x, 2); elevetaes the variable to a number assigned by us//

////x= Math.sqrt(x); this does the square route of our variable//

////x= Math.abs(x); returns the absolute power of a number//

////console.log(x);//

//x= Math.PI;//

//console.log(x);



/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side c:",c);

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextbox").value;
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C:" + c;
}
*/

/*
let count = 0;

document.getElementById("decreaseBtn").onclick =  function(){
  
  count-=1;
  document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
  count=0;
  document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
  count+=1;
  document.getElementById("countLabel").innerHTML = count;
}
*/
/*
let x;
let y; 
let z; 

document.getElementById("rollButton").onclick = function() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML =x;
    document.getElementById("yLabel").innerHTML =y;
    document.getElementById("zLabel").innerHTML =z;
}
*/

//let userName = "Bro Code";
//let phoneNumber = "123-456-7890";
//
////console.log(userName.length);
////console.log(userName.charAt(4));
////console.log(userName.indexOf("o"));
////console.log(userName.lastIndexOf("o"));
////userName = userName.trim();
////userName = userName.toUpperCase();
////userName = userName.toLowerCase();
//
//phoneNumber = phoneNumber.replaceAll("-", "");
//
//console.log(phoneNumber);

//------------------------------------------

// slice method extracts a section of a string
//              and returns it as a new string; 
//              without modifying the original string.

/*
let fullName = "Snoop Dog";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);


firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/


// method chaining = calling one method after another 
//                   in one coninous line of code

/*
let userName = "bro";

let letter = userName.charAt(0).toUpperCase();

console.log(letter);
*/

//----------------------------------------------
// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!
/*
let age = 68;

  if(age >= 65){
  console.log("You are a senior citizen!")
  }
  else if(age >= 18) {
   console.log("Your are an adult!");

  }
  else if(age < 0){
   console.log("YOU HAVEN'T BEEN BORN YET!");
  }
  else{
  console.log("Your are a child!");
 }


let online = false;

if(online){
  console.log("Online!");
}
else{
  console.log("Offline!");
}
*/

/*
document.getElementById("myButton").onclick = function(){
  
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");


  if(document.getElementById("myCheckBox").checked) {
    console.log("You are subscribed!");

  }
  else{
    console.log("You are not subscribed!");
  }

  if(visaBtn.checked) {
    console.log("You are paying with Visa!");
  }
  else if(mastercardBtn.checked) {
    console.log("You are paying with Mastercard!");
  }
  else if(paypalBtn.checked) {
    console.log("You are paying with PayPal!");
  }
  else{
    console.log("You must select a payment method!");
  }

}
*/

//////////////////////////////////////////////////////////////////////////
// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if " statements.

/*
let grade = "F";

switch(grade){
  case "A":
    console.log("You did great!");
    break;
  case "B":
    console.log("You did good!");
    break;
  case "C":
    console.log("You did okay!");
    break;
  case "D":
    console.log("You passed...barely");
    break;
  case "F":
    console.log("You Failed!");
    break;
  default:
    console.log(grade, "is not a letter grade!");

}
*/

/*
let grade = 95;

switch(true){
  case grade >= 90:
    console.log("You did great!");
    break;
  case grade >= 80:
    console.log("You did good!");
    break;
  case grade >= 70:
    console.log("You did okay!");
    break;
  case grade >= 60:
    console.log("You passed...barely");
    break;
  case grade <= 60:
    console.log("You Failed!");
    break;
  default:
    console.log(grade, "is not a letter grade!");

}
*/
//////////////////////////////////////////////////////////////


// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

/*
let temp = 50;

if(temp > 0 && temp < 30){
  console.log("The weather is good!");
}
else{
  console.log("The weather is bad!");
}
*/

/*
let temp = -1;

if(temp <= 0 || temp >= 30){
  console.log("The weather is bad!");
}
else{
  console.log("The weather is good!");
}
*/

/*
let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
  console.log("The weather is good!");
}
else{
  console.log("The weather is bad!");
}
*/

/////////////////////////////////////////////////
// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false false -> true

/*
let temp = 15;
let sunny = true;

if(!(temp > 0)){
  console.log("It's cold!");
}
else{
  console.log("It's warm!");
}

if(!sunny){
  console.log("It's cloudy outside!");
}
else{
  console.log("It's sunny outside!");
}
*/
//////////////////////////////////////////////////////

// while loop = repeat some code
//              while some condition is true
//              potentially infinite

/*
let userName = "";

while(userName == "" || userName == null){
  userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
*/

/*
while(1 == 1){
  console.log("HELP! I'M STUCJ IN AN INFINITE LOOP!");
}
*/

////////////////////////////////////////////////

// do while loop = do something,
//                 then chek the condition
//                 repeat if condition is true

/*
let userName;

do{
  userName = window.prompt("Please enter your name");
}while(userName == "")

console.log("Hello", userName);
*/

///////////////////////////////////////////////
// for loop = repeat some code a 
//            certain amount of times

/*
for(let i = 10; i  > 0; i-=3){
  console.log(i);
}

console.log("HAPPY NEW YEAR!")
*/

////////////////////////////////////////////////
// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

/*
for(let i = 1; i <= 20; i+=1){
  if(i == 13) {
    continue;
  }
  console.log(i);
}
*/

////////////////////////////////////////////////
// nested loop = a loop inside of another loop
/*
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1){
  for(let j = 1; j <= columns; j+=1){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
*/

////////////////////////////////////////////////////////
// function = Define code once, and use it many times.
//            To perform some code, call the fuction name.

/*
startProgram();

function startProgram(){
  let userName = "Saun";
  let age = 21;

  happyBirthday(userName, age);
}

function happyBirthday(a, b) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", a + "!");
  console.log("Happy birthday birthday to you!");
  console.log("Your are", b, "years old!");
}
*/

/////////////////////////////////////////////////////////////
// return = returns a value back to the place where you invoked a function




