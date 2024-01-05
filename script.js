// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt the user for password criteria
function generatePassword(){
  //Prompts the user for password length 8 < 128
  var passwordLength = prompt ("type length of password: 8 - 128 characters");
  console.log(passwordLength);
  
  //Prompts the user to include lowercase, uppercase, numeric, special characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Do you want to include lowercase letters?");
    console.log(lowerCase);
  } else {
    alert("Please retry and use numbers 8-128 only.");
    return;
  }

  var upperCase = confirm ("Do you want to include uppercase letters?");
    console.log(upperCase);

  var numeric = confirm ("Do you want to include numeric character types?");
    console.log(numeric);

  var specCharacters = confirm ("Do you want to include special character types (!, $, %, etc.)?");
    console.log(specCharacters);


  //possible characters for categories
  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()-+~{}[]<>?";
  
  //Validates input
  if (lowerCase === true){
    lettersLower = "abcdefghijklmnopqrstuvwxyz"; 
  }
  else{
    lettersLower = "";
  }
  //check lowercase letters
  console.log(lettersLower)

  if (upperCase === true){
    lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  }
  else{
    lettersUpper = "";
  }
  //check uppercase letters
  console.log(lettersUpper)

  if (numeric === true){
    numbers = "0123456789"; 
  }
  else{
    numbers = "";
  }
  //check numbers letters
  console.log(numbers)

  if (specCharacters === true){
    symbols = "!@#$%^&*()-+~{}[]<>?"; 
  }
  else{
    symbols = "";
  }
  //check symbols
  console.log(symbols)

  //variable for all characters - only includes category if true from confirm window(s)
  var allCharacters = lettersLower + lettersUpper + numbers + symbols;
  
  //Generates password 
  var generatedRandomPassword = "";
  while(passwordLength - 0 > generatedRandomPassword.length){
    generatedRandomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  console.log(generatedRandomPassword)

  //Password is displayed on page
  return generatedRandomPassword;

}

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// this function, that I commented out, was what was making the code "fire" upon loading my page.  
// writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);