// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompts for password criteria

// choose length of password 8-128 characters
// error message if <8 or >128 length chosen 
//"Password must contain between 8 and 128 characters." 

// choose which character types to include:
//        lowercase (abcdefghijklmnopqrstuvwxyz)
//        uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ)
//        numbers (012356789)
//        special characters (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// each prompt should be validated and at least one character type selected , 
//"Click OK to include lowercase characters."
//"Click OK to include UPPERCASE characters."
//"Click OK to include numerical characters."
//"Click OK to include special characters."
// ie, error message if none selected "Must select at east one character type."



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password generated
// password displayed

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



