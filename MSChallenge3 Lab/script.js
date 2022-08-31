// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var charsets = {
  lowerCharset: "abcdefghijklmnopqrstuvwxyz",
  upperCharset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numCharset: "0123456789",
  specialCharset: "!@#$%^&*()_+-=",
};

function generatePassword() {
  var passwordSets = "";

    var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = false;
    }

    var lowerCharset = confirm(
      "Would you like lowercase letters in your password?"
    );
    if (lowerCharset) {
      passwordSets += charsets.lowerCharset;
    };

    var upperCharset = confirm(
      "Would you also like uppercase letters in your password?"
    );
    if (upperCharset) {
      passwordSets += charsets.upperCharset;
    };

    var numCharset = confirm("Do you wannt numbers to go with your password?");
    if (numCharset) {
      passwordSets += charsets.numCharset;
    };

    var specialCharset = confirm("Finally, would you like some special characters?");
    if (specialCharset) {
      passwordSets += charsets.specialCharset;
    };

    var newPassword = "";
    for (let i = 0; i < passwordLength; i ++) {
      newPassword += passwordSets[Math.floor(Math.random() * passwordSets.length)]
    }
      return newPassword;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
