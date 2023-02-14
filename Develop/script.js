// Assignment Code
var generateBtn = document.querySelector("#generate");



//create function and log it:
function generatePassword(){
    var numericCharacters = ['7','4','12'];
    var upperCaseCharacters = ['M','J'];
    var specialCharacters = ['$','%','!'];
    console.log("7,$,4,%,12,!,M,J");


//Password Criteria and length:
function passwordLength(){
    console.log("length");
}


   return "7,$,4,%,12,!,M,J";
}
//Write password to the #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event Listener to generate button
generateBtn.addEventListener("click", writePassword);