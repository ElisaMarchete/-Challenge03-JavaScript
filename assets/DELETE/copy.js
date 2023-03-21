// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getLenght() {
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
  } else {
    window.alert("Thanks! The length criteria has been selected");
  }
  return length; // spit out
}
console.log(length);

function getLowercase() {
  const lowercase = conform("Do you want add lowercase characters?");
    return lowercase;
}

function getUppercase() {
  const uppercase = conform("Do you want add uppercase characters?");
    return uppercase;
}

function getNumeric() {
  const numeric = conform("Do you want add numeric characters?");
    return numeric;
}

function getSpecial() {
  const special = conform("Do you want add special characters?");
    return special;
}

// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;
function generatePassword(){

  // call lenght
  const lenght = getLenght();
  var passwordText = document.querySelector("#password");

  passwordText.value = lenght;
  passwordText.value = `I got ${lenght}`;
  //const lowerCase = getLowerCase();
}


//   use the info from ifs to generate the random using if again
//   random number / letter / special caracter 

// put all results from the if and random in diff variable and concat to display

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

