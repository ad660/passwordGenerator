//variables

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Function to generate password with user input
function generatePassword() {
  var passLength = parseInt(prompt("enter your password length between 10 and 60 characters")
  );

  var characters = [];

  if (passLength < 10 || passLength > 60 || isNaN(passLength)) {
    alert("Please choose a number between 10 and 60");
    return;
  }

  var wantNumbers = confirm("Do you want numbers in your password?");
  var wantUppercase = confirm(
    "Do you want uppercase letters in your password?"
  );
  var wantLowercase = confirm(
    "Do you want lowercase letters in your password?"
  );
  var wantSpecial = confirm(
    "Do you want special letters in your password?"
  );

  // Build the password based on input
  if (wantNumbers) {
    characters += numericCharacters;
  }

  if (wantUppercase) {
    characters += upperCasedCharacters;
  }

  if (wantLowercase) {
    characters += lowerCasedCharacters;
  }

  if (wantSpecial) {
    characters += specialCharacters;
  }

  var password = "";
  for (var i = 0; i < passLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
