// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables to be used
var number = "01223456789";
var specialChar = "!%&,*+-./<>?~";
var alphaLower = "qwertyuiopasdfghjklzxcvbnm";
var alphaUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";

var passwordLength = "";
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpecial;
var wordBank = "";
var finalPassword ="";

// function writePassword() {};

// Write password to the #password input
function generatePassword() {
  var passwordText = document.querySelector("#password");

  // First prompt the user to enter character count for the password
  var passwordLength = prompt("How many characters do you want your password to contain?");

  //Adding at least one of each type after the confirm 
  // Confirm if they want Lowercase letters
  var confirmLower = confirm("Do you want to use LOWERCASE letters?");
    
  // Confirm if they want Uppercase letters
  var confirmUpper = confirm("Do you want to use UPPERCASE letters?");

  // Confirm if they want Numbers
  var confirmNum = confirm("Do you want to use NUMBERS?");

  // Confirm if they want special characters 
  var confirmSpecial = confirm("Do you want to use SPECIAL CHARACTERS? (eg. @ # $)");
    
  console.log(passwordLength, confirmLower, confirmUpper, confirmNum, confirmSpecial);
  
  // Adding the confirmed strings to the var wordBank
  if (confirmLower) {
    wordBank+= alphaLower
    var lowerCaseMin = alphaLower.charAt(Math.floor(Math.random * alphaLower.length - 1))
    console.log(lowerCaseMin)
  };
  if (confirmUpper) {
    wordBank+= alphaUpper
    var uppercaseMin = alphaUpper.charAt(Math.floor(Math.random * alphaUpper.length - 1))
    console.log(uppercaseMin)
  };
  if (confirmNum) {
    wordBank+= number
    var numMin = number.charAt(Math.floor(Math.random * number.length - 1))
    console.log(numMin)
  };
  if (confirmSpecial) {
    wordBank+= specialChar
    var specialMin = specialChar.charAt(Math.floor(Math.random * specialChar.length - 1))
    console.log(specialMin)
  };

  console.log (wordBank);
  console.log(wordBank.split(""));
  
  // Loop to randomly choose password characters 
  
  // for (var i = 0; i <= passwordLength; i++) {
  //   password = password + wordBank.charAt(Math.floor(Math.random() * Math.floor(wordBank.length - 1)));
  // }

  // Display password in card
  document.getElementById("password").value = password;

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);