// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "Enter the number of characters you wish the password to have.  Minimum of 8, Maximum of 128"
  );
  var lowerLetters = confirm(
    "Would you like lowercase letters in your password?"
  );
  var upperLetters = confirm(
    "Would you also like uppercase letters in your password?"
  );
  var numbers = confirm("Do you wannt numbers to go with your password?");
  var special = confirm("Finally, would you like some special characters?");
  var newPassword = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randNum = Math.floor(
      Math.random() * lowerLetters.length,
      upperLetters.length,
      numbers.length,
      special.length
    );
    newPassword += lowerLetters.substring(randNum, randNum + 1);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
