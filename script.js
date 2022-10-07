// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompts for password criteria
function generatePassword() {
  var characterLength = prompt("Enter number of characters");

  console.log(characterLength);

  if (!characterLength || characterLength < 8 || characterLength > 128) {
    alert("Passsword must contain between 8 and 128 Characters!")
  }
  else {
    var possibleChars = []
    var lowercaseLetters = ["a", "b", "c", "d"];
    var uppercaseLetters = lowercaseLetters.map(function (el) {
      return el.toUpperCase();
      

    })

    var  lowercaseConfirm = confirm("Would you like to use lowercase characters?")

    //need confirm for other choices
if (lowercaseConfirm

  }

  console.log(characterType);

  if (characterType = true) {
    console.log()
  } else {
    console.log
  }
  for (var i = characterLength; i++) {
    console.log()
  }
}


// confirm selections

// use math.random somewhere in here to randomize choices

// for-loop for number of characters chosen:


// choose which character types to include:
//        lowercase (abcdefghijklmnopqrstuvwxyz) ok or cancel 
//        uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) ok or cancel
//        numbers (012356789) ok or cancel
//        special characters (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~") ok or cancel 

// each prompt should be validated and at least one character type selected , 
//"Click OK to include lowercase characters." if/then var booleanTrue =true var booleanFalse = false
//"Click OK to include UPPERCASE characters." if/then var booleanTrue =true var booleanFalse = false
//"Click OK to include numerical characters." if/then var booleanTrue =true var booleanFalse = false
//"Click OK to include special characters." if/then var booleanTrue =true var booleanFalse = false
//error message if none selected "Must select at east one character type." if all booleans are false, then restart prompts



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password generated
// password displayed

//console.log(passwordText); 
// displayed as alert?

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



