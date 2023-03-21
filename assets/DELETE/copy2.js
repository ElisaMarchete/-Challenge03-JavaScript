// const lowercase = confirm("Do you want add lowercase characters?");
// console.log(lowercase);

// function randomLowercase() {
//  const randomLowercase = Math.floor(Math.random()* lowercase.lenght);
  
// }
// randomLowercase();


// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;
// function generatePassword(){

  // call lenght
  // const lenght = getLenght();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = lenght;
  // passwordText.value = `I got ${lenght}`;
  //const lowerCase = getLowerCase();
// }


//   use the info from ifs to generate the random using if again
//   random number / letter / special caracter 

// put all results from the if and random in diff variable and concat to display








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const passwordInput = {
  length: prompt("Please insert the length of the password - MIN 8 MAX 128 CHARACTERS"),
  lowercase: confirm("Do you want add lowercase characters?"),
  uppercase: confirm("Do you want add uppercase characters?"),
  numeric: confirm("Do you want add numeric characters?"),
  special: confirm("Do you want add special characters?"),
}

function alertLength(){
if (passwordInput.length < 8) {
  window.alert(
    "Invalid Enter - Please try it again! choose a length of at least 8 caracters"
  );
} else if (passwordInput.length > 128) {
  window.alert(
    "Invalid Enter - Please try it again! maximum password length can be 128 characters"
  ); 
} 
}

document.getElementById("password").innerHTML = parseInt(length);
console.log(length);

// Add event listener to generate button
generateBtn.addEventListener("click", passwordInput);

// 15



// RANDOM GENERATOR
// const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";



  /*
function RandomLowercase() {
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
 return lowercaseChars[Math.floor(Math.random() *lowercaseChars.length)]
}
console.log(RandomLowercase());


function RandomUppercase() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   return uppercaseChars[Math.floor(Math.random() *uppercaseChars.length)]
  }
  console.log(RandomUppercase());
  
  function RandomNumeric() {
    const numericChars = "0123456789";
     return numericChars[Math.floor(Math.random() *numericChars.length)]
    }
    console.log(RandomNumeric());

    function RandomSpecial() {
      const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
       return specialChars[Math.floor(Math.random() *specialChars.length)]
      }
      console.log(RandomSpecial());

  

// if (lowercase === true) {
//   Math.floor(Math.random() *)
// } else if (lowercase === false) {
  
// }
*/








// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
function getPassword () {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  lowercase = confirm("Do you want add lowercase characters?");

//  if (lowercase === true) {
//     return lowercaseChars[Math.floor(Math.random() *lowercaseChars.length)] } 
}
getPassword();

// document.getElementById("password").innerHTML = parseInt(length);
//   console.log(length);

  generateBtn.addEventListener("click", getPassword);

// console.log(RandomLowercase());



// Write password to the #password input
/*
function passwordImput (){
  const length = prompt(
    "Please insert the length of the password - MIN 8 MAX 128 CHARACTERS"
  );

  if (length < 8) {
    window.alert(
      "Invalid Enter - Please try it again! choose a length of at least 8 caracters"
    );
  } else if (length > 128) {
    window.alert(
      "Invalid Enter - Please try it again! maximum password length can be 128 characters"
    );
  } 
  */

  // document.getElementById("password").innerHTML = parseInt(length);
  // console.log(length);

  // const lowercase = confirm("Do you want add lowercase characters?");

  // const uppercase = confirm("Do you want add uppercase characters?");
 

  // const numeric = confirm("Do you want add numeric characters?");
  

  // const special = confirm("Do you want add special characters?");


// passwordImput();


// RANDOM GENERATOR
// const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";


// function RandomLowercase() {
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

//   if (lowercase === true) {
//     return lowercaseChars[Math.floor(Math.random() *lowercaseChars.length)] } 
//   }
//   console.log(RandomLowercase());

  /*
function RandomLowercase() {
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
 return lowercaseChars[Math.floor(Math.random() *lowercaseChars.length)]
}
console.log(RandomLowercase());


function RandomUppercase() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   return uppercaseChars[Math.floor(Math.random() *uppercaseChars.length)]
  }
  console.log(RandomUppercase());
  
  function RandomNumeric() {
    const numericChars = "0123456789";
     return numericChars[Math.floor(Math.random() *numericChars.length)]
    }
    console.log(RandomNumeric());

    function RandomSpecial() {
      const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
       return specialChars[Math.floor(Math.random() *specialChars.length)]
      }
      console.log(RandomSpecial());

  

// if (lowercase === true) {
//   Math.floor(Math.random() *)
// } else if (lowercase === false) {
  
// }
*/