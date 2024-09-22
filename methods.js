

function capitalize(word){
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
}

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let Caclulator = {
    addition(firstNum, secondNum){
        finalNum = firstNum + secondNum;
        return finalNum;
    },
    
    division(firstNum, secondNum){
        if (secondNum === 0){
            return "cannot divide by zero"
        }
        else{
            finalNum = firstNum/secondNum;
            return finalNum;
        }
    }
}


module.exports = {capitalize, reverseString, Caclulator};