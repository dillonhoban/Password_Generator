// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//First prompt the user to enter character count for the password
var passwordLength = prompt("How many characters do you want your password to contain?");
//Confirm if they want Lowercase letters
var confirmLower = confirm("Do you want to use LOWERCASE letters?");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
//Confirm if they want Uppercase letters
var confirmUpper = confirm("Do you want to use UPPERCASE letters? ");
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
//Confirmif they want numbers
var confirmNum = confirm("Do you want to use NUMBERS?");
var numbers = "1234567890";
//Then confirm if they want special characters 
var confirmSpecial = confirm("Do you want to use SPECIAL CHARACTERS? (eg. @ # $)");
var specialCharacters = "!@#$%&*?";

