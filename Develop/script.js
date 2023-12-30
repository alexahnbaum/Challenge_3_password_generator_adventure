// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt the user for password criteria
function generatePassword() {
  //Prompts the user for password length 8 < 128
  var passwordLength = prompt ("type length of password: 8 - 128 characters");
  console.log(passwordLength);
  
  //Prompts the user to include lowercase, uppercase, numeric, special characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = prompt("Do you want to include lowercase letters? Type y for yes, or n for no.");
    console.log(lowerCase);
  } else {
    alert("Please retry and use numbers 8-128 only.");
  }

  if (lowerCase === "y" || "n") {
    var upperCase = prompt ("Do you want to include uppercase letters? Type y for yes, or n for no.");
    console.log(upperCase);
  } else{
    alert("Please retry and y for yes, or n for no only.");
  }

  if (upperCase === "y" || "n") {
    var numeric = prompt ("Do you want to include numeric character types? Type y for yes, or n for no.");
    console.log(numeric);
  } else {
    ("Please retry and y for yes, or n for no only.");
  }

  if (numeric === "y" || "n") {
    var specCharacters = prompt ("Do you want to include special character types (!, $, %, etc.)? Type y for yes, or n for no.");
    console.log(specCharacters);
  } else {
    ("Please retry and y for yes, or n for no only.");
  }

  //Generates password 
  
  
  //Validates input
  

  //Password is displayed on page
  return "";
}

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
