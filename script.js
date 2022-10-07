// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompts for password criteria
function generatePassword() {
  var characterLength = parseInt(prompt("Enter number of characters"));
  var password = ""
  //console.log(characterLength);

  if (!characterLength || characterLength < 8 || characterLength > 128) {
    alert("Passsword must contain between 8 and 128 Characters!")
    return 
  }
  else {
    var possibleChars = []
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "^",
      ",", "`", "{", "|", "}", "~"];

    var uppercaseLetters = lowercaseLetters.map(function (el) {
      return el.toUpperCase();
    })

    var lowercaseConfirm = confirm("Would you like to use lowercase characters?");
    var uppercaseConfirm = confirm("Would you like to use uppercase letters?");
    var numbersConfirm = confirm("Would you like to use digits?");
    var specialCharsConfirm = confirm("Would you like to use special characters?");

    if (lowercaseConfirm) {
      possibleChars.push(lowercaseLetters)

    }

    if (uppercaseConfirm) { possibleChars.push(uppercaseLetters) }
    if (numbersConfirm) { possibleChars.push(numbers) }
    if (specialCharsConfirm) { possibleChars.push(specialChars) }

    console.log(possibleChars)

    var i = 0
    while (password.length < characterLength) {

      var characterArray = possibleChars[i]

      var newChar = characterArray[Math.floor(Math.random() * characterArray.length)]

      password = password + newChar
      console.log(password)
      if (i !== possibleChars.length - 1) {
        i++
      }
      else {
        i=0
      }
    }
  }
  return password
}



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



