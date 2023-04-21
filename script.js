//arrays 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//generate password function and prompt that ask initial question
function generatePassword() {
  passwordLength = window.prompt("How many characters would you like your password? Choose between 8 and 128."); 
  console.log("Password length " + passwordLength);
 
  //if no value is added to the window this prompt pop ups asking for a value
  if(!passwordLength) {
    alert("Required value!"); 

  //length of password prompt, and series of prompts for password criteria, you can choose which criteria you'd like to use
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128."); 
    console.log("Password length " + passwordLength);
  } else {
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
  }

  //if none of the criteria was chosen this pops up
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choices = alert("You must choose a criteria!");
    console.log(choices);
  
  // if all four criteria was chosen, concat appends strings together
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    choices = special.concat(lower, upper, number);
    console.log(choices);
  
  // if three criteria was chosen, concat appends strings together
  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    choices = special.concat(upper, number);
    console.log(choices);
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    choices = special.concat(lower, number);
    console.log(choices);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    choices = special.concat(lower, upper);
    console.log(choices);
  } else if (confirmLower && confirmUpper && confirmNumber) {
    choices = number.concat(lower, upper);
    console.log(choices);
  
  // if two criteria was chosen, concat appends strings together
  } else if (confirmNumber && confirmSpecial) {
    choices = special.concat(number);
    console.log(choices);
  } else if (confirmLower && confirmSpecial) {
    choices = special.concat(lower);
    console.log(choices);
  } else if (confirmUpper && confirmSpecial) {
    choices = special.concat(upper);
    console.log(choices);
  } else if (confirmLower && confirmNumber) {
    choices = lowerCase.concat(number);
    console.log(choices);
  } else if (confirmLower && confirmUpper) {
    choices = lower.concat(upper);
    console.log(choices);
  } else if (confirmUpper && confirmNumber) {
    choices = number.concat(upper);
    console.log(choices);

  // if one criteria was chosen
  } else if (confirmLower) {
    choices = lower;
    console.log(choices);
  } else if (confirmUpper) {
    choices = upper;
    console.log(choices);
  } else if (confirmNumber) {
    choices = number;
    console.log(choices);
  } else if (confirmSpecial) {
    choices = special;
    console.log(choices);
    return;
};

//placeholder for where choices will be added
var passwordBlank = [];

//creates random variables 
for (var i = 0; i < passwordLength; i++) {
  var allChoices = choices[Math.floor(Math.random() * choices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

//joins password array
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);