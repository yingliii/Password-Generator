// Given: assignment Code
var generateBtn = document.querySelector("#generate"); //to start the generating process from html generate button
  //Assign var
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //list of all upper case characters
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"; //list of all lower case characters
var numChar = "1234567890"; //list of all numbers
var specialChar = "~!@#$%^&*`{}[]|:;'<>?,./"; //list of special charaters

//Write function to generate random password
var generatePassword = function () {
  // ask for choice of password length
  var passwordLength = window.prompt("How many characters would you want for your password? Password lenght must be between 8-128 characters");
  
  //if input is less than 8, it is invalid enter
  if (passwordLength < 8) {
    
    // TODO show the user input on the alert window
    window.alert("Invalid number, please enter again. Password must have more than 7 characters.");
    return;
  
  //if input is greater than 128, it is invalid enter
  } if (passwordLength > 128) {
    
    // TODO show the user input on the alert window
    window.alert("Invalid number, please enter again. Password must have less than 128 characters.");
    return;
  }

// ask for choice of uppercase characters
  var upperCaseChoice = window.confirm("Do you want password include UPPERCASE characters?");
  // TODO
  if (!upperCaseChoice) {
    upperCaseChoice = false;
    // ASK return here?
  }

// ask for choice of lowercase characters
  var lowerCaseChoice = window.confirm("Do you want password include LOWERCASE characters?");
  // TODO
  if (!lowerCaseChoice) {
    lowerCaseChoice = false;
    // ASK return here?
  }

// ask for choice of numeric characters
  var numChoice = window.confirm("Do you want password include NUMERICAL characters?");
  // TODO
  if (!numChoice) {
    numChoice = false;
    // ASK return here?
  }

//ask for choice of special characters
  var specialCharChoice = window.confirm("Do you want password include SPECIAL characters?");
  // TODO
  if (!specialCharChoice) {
    specialCharChoice = false;
    // ASK return here?
  }
// Assign random var
  var upperCaseRandom = String.upperCaseChar(Math.floor(Math.random() * upperCaseChar.length));
  var lowerCaseRandom = String.upperCaseChar(Math.floor(Math.random() * lowerCaseChar.length));
  var numRandom = String.upperCaseChar(Math.floor(Math.random() * numChar.length));
  var specialCharRandom = String.upperCaseChar(Math.floor(Math.random() * specialChar.length));

}

// Given: write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Given: add event listener to generate button
generateBtn.addEventListener("click", writePassword);
