/*
CIT 281 Project 2
Name: Elliott Nichols
*/

// Returns a random number between min (inclusive) and max (exclusive)
    function getRandomInteger(min, maxLength) {
    return Math.floor(Math.random() * (maxLength - min + 1) + min);
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log(result);

// This function calls from the same alphabet constant but returns only one letter
    function getRandomLetter(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let output = "";
    for (let i = 0; i < getRandomLetter(1, 2); i++) {
        output += alphabet[getRandomLetter(0,alphabet.length-1)];
    }
    console.log(output);

// This function will again get a random string length based on alphabet but will call getRandomLetter to source the variables and add them to 'newString'

    function getRandomString(minLength, maxLength) {
        const length = getRandomInteger(minLength, maxLength );
        let newString = "";
        for (let i = 0; i < length; i++) {
            newString += alphabet[getRandomLetter(0, alphabet.length - 1)];
        }
        return newString
    }

    console.log(getRandomString(10,20));

// This function will take a string and return it in ascending order
function getSortedString(string) {return string.split("").sort().join("");}

console.log(getSortedString("xpacd"));
