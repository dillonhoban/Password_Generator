// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables to be used
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordLength = "";
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpecial;
var values = "";

// First prompt the user to enter character count for the password
  var passwordLength = prompt("How many characters do you want your password to contain?");
  
  console.log(passwordLength);

  // Confirm if they want Lowercase letters
  var confirmLower = confirm("Do you want to use LOWERCASE letters?");
  if (confirmLower) {
   
  }
  console.log(values);

  // Confirm if they want Uppercase letters
  var confirmUpper = confirm("Do you want to use UPPERCASE letters? ");

  // Confirm if they want Numbers
  var confirmNum = confirm("Do you want to use NUMBERS?");

  // Confirm if they want special characters 
  var confirmSpecial = confirm("Do you want to use SPECIAL CHARACTERS? (eg. @ # $)");

  // Loop to randomly choose password characters 
  for(var i = 0; i <= passwordLength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
  }

  // Display password in card
  document.getElementById("password").value = password;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
