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
    if (getLength < 8 || getLength > 128) {
        window.alert("Invalid enter. Please enter number from 8-128!");
        return;
    }

    var selected = "";
    var includeUpper = window.confirm("Do you want to include UPPERCASES?");
    var includeLower = window.confirm("Do you want to include LOWERCASES?");
    var includenumber = window.confirm("Do you want to include NUMBERS?");
    var includesymbol = window.confirm("Do you want to include SYMBOLS?");

    if (includeUpper == true) {
        selected += upperCaseChar;
    }
    if (includeLower == true) {
        selected += lowerCaseChar;
    }
    if (includenumber == true) {
        selected += numChar;
    }
    if (includesymbol == true) {
        selected += specialChar;
    }
    console.log(selected); // the select var with confirm window works !

    var getPassword = "";
    //get password length -> parseInt is used to convert it in number
    var passwordLength = parseInt(getLength);

    console.log(passwordLength);

    // create for loop to get the length
    for(var i=0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * selected.length);
        getPassword = getPassword + selected[random];
    }

    console.log(getPassword);

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