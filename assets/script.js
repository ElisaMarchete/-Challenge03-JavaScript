// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordInput(input) {

  const length = prompt("Please insert the length of the password - MIN 8 MAX 128 CHARACTERS");
  const lowercase = confirm("Do you want add lowercase characters?");
  const uppercase = confirm("Do you want add uppercase characters?");
  const numeric = confirm("Do you want add numeric characters?");
  const special = confirm("Do you want add special characters?");

  // Find a lowercase random = call function
  const lowercaseResult = findLowercaseRandom(lowercase);

  // Find a uppercase random = call function
  const uppercaseResult = findUppercaseRandom(uppercase);

  // Find a numeric random = call function
  const numericResult = findNumericRandom(numeric);

  // Find a special random = call function
  const specialResult = findSpecialRandom(special);

  // Find a lenght random = call function
  const lenghtResult = findLenghtRandom(length);

  const concat = `${lowercaseResult}${uppercaseResult}${numericResult}${specialResult}`;
  console.log(concat);
}

function findLowercaseRandom(isLowercase){
  if (isLowercase === true) {
    const RandomLowercase = "abcdefghijklmnopqrstuvwxyz";
    const result = RandomLowercase[Math.floor(Math.random()* RandomLowercase.length)];
    console.log({result});
    return result;
  } else {
    return "";
  }
}

function findUppercaseRandom(isUppercase){
  if (isUppercase === true) {
    const RandomUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = RandomUppercase[Math.floor(Math.random()* RandomUppercase.length)];
    console.log({result});
    return result;
  } else {
    return "";
  }
}

function findNumericRandom(isNumeric){
  if (isNumeric === true) {
    const RandomNumeric = "0123456789";
    const result = RandomNumeric[Math.floor(Math.random()* RandomNumeric.length)];
    console.log({result});
    return result;
  } else {
    return "";
  }
}

function findSpecialRandom(isSpecial){
  if (isSpecial === true) {
    const RandomSpecial = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    const result = RandomSpecial[Math.floor(Math.random()*RandomSpecial.length)];
    console.log({result});
    return result;
  } else {
    return "";
  }
}

// FUNCTION TO CREATE CHOSEN LENGHT
// get info from impute and transform number = parseInte --- OKAY
// generate random info * imputed info
// Decrease the randomLenght if true -> special, numeric, uppercase , lowercase
// concate all functions

function findLenghtRandom(inputedLenght){


}
  // const lenghtParInt = parseInt(inputedLenght);
  // const characters = "abcdefghijklmnopqrstuvwxyz";
  // const i = 0;
  // while (i == lenghtParInt) {
  //   characters += lenghtParInt[i]; 
  //   i++
  // }

  // console.log(i);
  // return result;
// 

// if (lenghtParInt >= 8 && lenghtParInt <= 128) {
  // if () {
    
  //   return result;
  // } else {
  //   return "";
  // }
// }


// Add event listener to generate button
const click = generateBtn.addEventListener("click", passwordInput);
