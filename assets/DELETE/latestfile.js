// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordInput(length, lowercase, uppercase, numeric, special) {
  const length = prompt("Please insert the length of the password - MIN 8 MAX 128 CHARACTERS");
  const lowercase = confirm("Do you want add lowercase characters?");
  const uppercase = confirm("Do you want add uppercase characters?");
  const numeric = confirm("Do you want add numeric characters?");
  const special = confirm("Do you want add special characters?");
}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordInput);

// RANDOM
function randomChars(random) {


RandomLowercase(lowercaseChars = "abcdefghijklmnopqrstuvwxyz") {
  return lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
}
console.log(RandomLowercase());

function RandomUppercase(uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  return uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
}
console.log(RandomUppercase());

function RandomNumeric(numericChars = "0123456789") {
  return numericChars[Math.floor(Math.random() * numericChars.length)];
}
console.log(RandomNumeric());

function RandomSpecial(specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=") {
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}
console.log(RandomSpecial());
}
// function generatePassword(){

//   // call lenght
//   const getlenght = ;
//   var passwordText = document.querySelector("#password");

//   passwordText.value = lenght;
//   passwordText.value = `I got ${lenght}`;
// }

// function reqMinMaxCharas(){
//   if (length < 8) {
//     window.alert(
//       "Invalid Enter - Please try it again! choose a length of at least 8 caracters"
//     );
//   } else if (length > 128) {
//     window.alert(
//       "Invalid Enter - Please try it again! maximum password length can be 128 characters"
//     );
//   }
// }

// RANDOM GENERATOR

/*
function RandomLowercase() {
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
 return lowercaseChars[Math.floor(Math.random() *lowercaseChars.length)]
}
console.log(RandomLowercase());



  

// if (lowercase === true) {
//   Math.floor(Math.random() *)
// } else if (lowercase === false) {
  
// }
*/
