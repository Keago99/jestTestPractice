

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


module.exports = {capitalize, reverseString};