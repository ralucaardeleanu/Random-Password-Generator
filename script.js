const buttonGenerate= document.getElementById("generate-password");
const passwordOne=document.getElementById("password-one");
const passwordTwo=document.getElementById("password-two");
const passwordLength=document.getElementById("password-length");
const checkboxSymbols=document.getElementById("symbols");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


buttonGenerate.addEventListener("click", function generatePassword() {
    let fullCharacters;

    if (checkboxSymbols.checked == true) {
        fullCharacters = characters.concat(symbols);
    } else {
        fullCharacters = [...characters];}
    
    let passwordLengthInput = parseInt(passwordLength.value);
    
    if(passwordLengthInput>=6 && passwordLengthInput<=20) {
   
    let randomPasswordOne = "";
    let randomPasswordTwo = "";

    for (let i = 0; i <passwordLengthInput ; i++) {
        randomPasswordOne += fullCharacters[Math.floor(Math.random() * fullCharacters.length)];
        randomPasswordTwo += fullCharacters[Math.floor(Math.random() * fullCharacters.length)];
    }

    passwordOne.textContent = randomPasswordOne;
    passwordTwo.textContent = randomPasswordTwo;
}
    else if(passwordLengthInput > 20) {
        alert("Password length is too long!")
    }
    else if(passwordLengthInput < 6) {
        alert("Password length is too short!")
    }
    else 
        {
            alert("Insert a valid password length!")
        }
    
    
});

passwordOne.addEventListener("click", function copyPassword() {
    
    var copyTextOne = passwordOne.textContent;

    navigator.clipboard.writeText(copyTextOne).then(function() {
        alert("Copied the text: " + copyTextOne);
    }).catch(function(err) {
        console.error("Failed to copy: ", err);
    });
});

passwordTwo.addEventListener("click", function copyPassword() {
    
    var copyTextTwo = passwordTwo.textContent;

    navigator.clipboard.writeText(copyTextTwo).then(function() {
        alert("Copied the text: " + copyTextTwo);
    }).catch(function(err) {
        console.error("Failed to copy: ", err);
    });
});