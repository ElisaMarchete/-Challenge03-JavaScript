// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordInput() {
  const leLength = prompt(
    "Please insert the length of the password - MIN 8 MAX 128 CHARACTERS"
  );
  if (leLength < 8) {
    window.alert("Invalid Enter! Minimum length 8 caracters");
    return;
  } else if (leLength > 128) {
    window.alert("Invalid Enter! Maximum length 128 characters");
    return;
  }

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

  // Concat the input results
  let concat = `${lowercaseResult}${uppercaseResult}${numericResult}${specialResult}`;

  // Convert input lenght string to number
  let lenghtParInt = parseInt(leLength);

  // Random remaining characters --- inputed lenght minus prompts criteria
  let charac = lenghtParInt - concat.length;
  let text = generateRandomText(charac);

  // Concat prompts criteria and random number
  getPassword = `${concat}${text}`;

  // Display password
  let passwordText = document.querySelector("#password");
  passwordText.value = getPassword;
}

function generateRandomText(charac) {
  let charList = "0123456789";
  let text = "";
  for (let i = 0; i < charac; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
}

function findLowercaseRandom(isLowercase) {
  if (isLowercase === true) {
    const RandomLowercase = "abcdefghijklmnopqrstuvwxyz";
    const result =
      RandomLowercase[Math.floor(Math.random() * RandomLowercase.length)];
    return result;
  } else {
    return "";
  }
}

function findUppercaseRandom(isUppercase) {
  if (isUppercase === true) {
    const RandomUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result =
      RandomUppercase[Math.floor(Math.random() * RandomUppercase.length)];
    return result;
  } else {
    return "";
  }
}

function findNumericRandom(isNumeric) {
  if (isNumeric === true) {
    const RandomNumeric = "0123456789";
    const result =
      RandomNumeric[Math.floor(Math.random() * RandomNumeric.length)];
    return result;
  } else {
    return "";
  }
}

function findSpecialRandom(isSpecial) {
  if (isSpecial === true) {
    const RandomSpecial = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    const result =
      RandomSpecial[Math.floor(Math.random() * RandomSpecial.length)];
    return result;
  } else {
    return "";
  }
}

// Add event listener to generate button
const click = generateBtn.addEventListener("click", passwordInput);
