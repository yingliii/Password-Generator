// Given: assignment Code
var generateBtn = document.querySelector("#generate"); //to start the generating process from html generate button

//list variables
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numChar = "1234567890";
var specialChar = "~!@#$%^&*`{}[]|:;'<>?,./";

function generatePassword(){

    // set up promts
    var getLength = window.prompt("Write the length of the password. (range of 8-128 characters");
        // alert window pops if number entered is not in range of 8-128
        if (getLength < 8 || getLength > 128) {
        window.alert("Invalid enter. Please enter number from 8-128!");
        return;
        }

    var selectedChar = "";
    var includeUpper = window.confirm("Do you want to include UPPERCASES?");
    var includeLower = window.confirm("Do you want to include LOWERCASES?");
    var includenumber = window.confirm("Do you want to include NUMBERS?");
    var includesymbol = window.confirm("Do you want to include SYMBOLS?");

    //if user selected any of the include... var, will be logged
    if (includeUpper == true) {
        selectedChar += upperCaseChar;
    }
    if (includeLower == true) {
        selectedChar += lowerCaseChar;
    }
    if (includenumber == true) {
        selectedChar += numChar;
    }
    if (includesymbol == true) {
        selectedChar += specialChar;
    }

    var getPassword = "";
    //get password length -> parseInt is used to convert string to number
    var passwordLength = parseInt(getLength);

    // create for loop to get the length
    for(var i=0; i < passwordLength; i++) {
        // random variable to select random characters from selected
        var random = Math.floor(Math.random() * selectedChar.length);
        getPassword = getPassword + selectedChar[random];
    }

    return getPassword;
}

// Given: write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Given: add event listener to generate button
generateBtn.addEventListener("click", writePassword);