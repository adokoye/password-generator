//variables declaration of character length, uppercase, lowercase, numeric and special characters values.
var selectCharAmount;
var acceptUppercase;
var acceptLowercase;
var acceptNumeric;
var acceptSpecialChar;

//looping through the arrays using ASCII character codes
var uppercase = characterLooper(65, 90);
var lowercase = characterLooper(97, 122);
var numbers = characterLooper(48, 57);
//concatenating all the special characters together, becasue their order is not sequential
var specialCharacters = characterLooper(33, 47).concat(
  characterLooper(58, 64)
).concat(
  characterLooper(91, 96)
).concat(
  characterLooper(123, 126)
);

//this will loop through an array of each variable from low to high of the ASCII code characters.
function characterLooper(low, high) {
  var characterLoop = [];
  for (let i = low; i <= high; i++) {
    characterLoop.push(i);
  }
  return characterLoop;
}

//control flow for selection of characters and lenght to generate password
var generatePassword = function () {

  //prompt user to input a valid amount of character length
  selectCharAmount = parseInt(prompt("How long would you like your password to be? Please select between 8 and 128."));
  //validate user input, forcing them to select valid input
  while (!selectCharAmount || selectCharAmount < 8 || selectCharAmount > 128) {
    alert("You need to provide a valid answer, please try again!");
    selectCharAmount = parseInt(prompt("Please select between 8 and 128."));
  };
  //prompt user to select character types they want included.
  if (selectCharAmount) {
    //uppercase prompt
    acceptUppercase = confirm("Would you like to add Uppercase characters?");
    //lowercase prompt
    acceptLowercase = confirm("would you like to add Lowercase characters?");
    //numeric prompt
    acceptNumeric = confirm("Would you like to add Numbers?");
    //special character prompt
    acceptSpecialChar = confirm("Would you like to add Special characters?");
  };
  //validating input, making sure that they choose at least 1 character type
  if (!acceptUppercase && !acceptLowercase && !acceptNumeric && !acceptSpecialChar) {
    //needed to store the selections even though they were falsy values
    selection = alert("You must choose at least one character type! Please try again.");
  }
  // for all 4 options selected
  else if (acceptUppercase && acceptLowercase && acceptNumeric && acceptSpecialChar) {
    selection = uppercase.concat(lowercase, specialCharacters, numbers);
  }
  //for 3 out of 4 options selected
  else if (acceptUppercase && acceptLowercase && acceptNumeric) {
    selection = uppercase.concat(lowercase, numbers);
  }
  else if (acceptUppercase && acceptLowercase && specialCharacters) {
    selection = uppercase.concat(lowercase, specialCharacters);
  }
  else if (acceptUppercase && acceptNumeric && specialCharacters) {
    selection = uppercase.concat(numbers, specialCharacters);
  }
  else if (acceptLowercase && acceptNumeric && specialCharacters) {
    selection = lowercase.concat(numbers, specialCharacters);
  }
  //for 2 out of 4 options selected
  else if (acceptUppercase && acceptLowercase) {
    selection = uppercase.concat(lowercase);
  }
  else if (acceptUppercase && specialCharacters) {
    selection = uppercase.concat(specialCharacters);
  }
  else if (acceptUppercase && acceptNumeric) {
    selection = uppercase.concat(numbers);
  }
  else if (acceptLowercase && acceptNumeric) {
    selection = lowercase.concat(numbers);
  }
  else if (acceptLowercase && specialCharacters) {
    selection = lowercase.concat(specialCharacters);
  }
  else if (acceptNumeric && specialCharacters) {
    selection = numbers.concat(specialCharacters);
  }
  //for 1 out of 4 options selected
  else if (acceptUppercase) {
    selection = uppercase;
  }
  else if (acceptLowercase) {
    selection = lowercase;
  }
  else if (specialCharacters) {
    selection = specialCharacters;
  }
  else if (acceptNumeric) {
    selection = numbers;
  };

  //declaring array as placeholder for generated password based on selected character length
  var passwordGen = []
  //randomizing selection and converting ASCII character codes to string.
  for (let i = 0; i < selectCharAmount; i++) {
    var characterCode = selection[Math.floor(Math.random() * selection.length)]
    passwordGen.push(String.fromCharCode(characterCode));
  }
  //joining randomised values into string
  return passwordGen.join('');
};


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