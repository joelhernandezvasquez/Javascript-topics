
// EXERICES WITH SUBSTRING, SLICE, SPLIT AND INDEX OF

/*
 1 - Write a function that takes in a string and returns the first and last characters of the string.
For example, if the input string is "hello", the output should be "ho".

*/

// const STATEMENT = "hello"

// const getFirstAndLastCharacter = (statement) =>{
//  return `${statement.slice(0,1)}${statement.slice(-1)}`;
// }

// const result = getFirstAndLastCharacter(STATEMENT);
// console.log(result);

/*
2 . Write a function that takes in a string and returns the first two and last two characters of the string.
For example, if the input string is "hello", the output should be "helo".


const getLastThoCharacters = (statement) =>{
    return `${statement.substring(0,2)}${statement.slice(-2)}`
  
}

console.log(getLastThoCharacters('hellosdfsdfsdfsd23'))

*/

/*
3.Write a function that takes in a string and returns the middle character(s) of the string. If the length of the string is even, return the two middle characters.
For example, if the input string is "hello", the output should be "l". If the input string is "helloo", the output should be "lo".


const isEven =(string) =>{
    return string.length % 2 === 0
}

const getMiddleCharacters = (statement) =>{
  
    const startPosition = statement.length / 2 ;
     let result = "";
    
    if(isEven(statement)){
        const endPosition = startPosition + 2;
       return statement.substring(startPosition,endPosition)  
    }

   return statement.substring(startPosition,startPosition+1) ;
   
}

console.log(getMiddleCharacters("helloo"))

*/

/*
4.Write a function that takes in a string and returns the string with all vowels removed.
For example, if the input string is "hello", the output should be "hll".


const removeVowels = (string) =>{
     const regex = /[aeiouAEIOU]/g;
    return  string.replace(regex,'');
}

console.log(removeVowels("hello"))
*/


/*
5 .Write a function that takes in a string and a delimiter and returns a list of the words in the string split by the delimiter.
For example, if the input string is "hello world" and the delimiter is " ", the output should be ["hello", "world"].


const setDelimiter = (string,delimiter) =>{
  const result = string.split(delimiter);
  return result;
}

console.log(setDelimiter("hello world"," "));

*/
/*
6.Write a function that takes in a string and a character and returns the index of the first occurrence of the character in the string.
For example, if the input string is "hello" and the character is "e", the output should be 1.


const getCharacterFirstOccurrence = (string,character) =>{
    const result = string.indexOf(character);
    return result;
}

console.log(getCharacterFirstOccurrence("hello","e"));

*/

/* 7.Write a function that takes in a string and a substring and returns the index of the first occurrence of the substring in the string.
// For example, if the input string is "hello world" and the substring is "world", the output should be 6.


// const getIndexOfSubstring =  (string,substring) => {
//   const index = string.indexOf(substring);
//   return index;
// }
 console.log(getIndexOfSubstring("hello world","world"));
*/

/* 8.Write a function that takes in a string and a substring and returns the number of times the substring appears in the string.
// For example, if the input string is "hello world" and the substring is "o", the output should be 2.


const totalSubstringIteration = (string,substring) =>{
    const words = string.split(" ");
    let count = 0;

    words.forEach(word=> {
       if(word.indexOf(substring) !==-1) {
         count++;
       }
    });
  return count;
}

console.log(totalSubstringIteration("hello world","o"))
*/
/*
9.Write a function that takes in a string and returns the string reversed.
For example, if the input string is "hello", the output should be "olleh".


const reversedString = (string) =>{
   
 return string.split("").reverse().join("");
}
console.log(reversedString("hello"))
*/

[
  { name: "0470", description: "Television" },
  { name: "0472", description: "Friend/Relative" },
  { name: "0476", description: "Other" },
  { name: "0480", description: "Internet" },
  { name: "101HazBook", description: "Free 101 Pet Hazards Guide" },
  { name: "1636", description: "Veterinarian Office" },
  { name: "Google", description: "Google Search" },
  { name: "Yahoo", description: "Yahoo Search" },
  { name: "H0472", description: "Friend/Relative" },
  { name: "H0476", description: "Other" },
  { name: "H0480", description: "Internet" },
  { name: "PHCPPREPOL", description: "Previous Policy Holder" },
  { name: "PPI0472", description: "Friend" },
  { name: "PPI0480", description: "Internet" },
  { name: "PPI0476", description: "Other" },
  { name: "PPI0470", description: "Television" },
  { name: "PPI0473", description: "Radio" },
  { name: "PPIEML", description: "E-Mail" },
  { name: "Employee Benefit Program", description: "Employee Benefit Program" },
  { name: "NRA Mail Letter", description: "NRA Mail Letter" },
  { name: "PETIWEBSITE", description: "PetInsured Website" },
  { name: "PETIEML", description: "E-Mail" },
  { name: "PETI0472", description: "Friend/Relative Referral" },
  { name: "PETI0480", description: "Internet" },
  { name: "PETIMAIL", description: "Mail Letter" },
  { name: "PETIVET", description: "My Veterinarian\u0027s Office" },
  { name: "Online Advertisement", description: "Online Advertisement" },
  { name: "PIRWEBSITE", description: "Pet Insurance Review Website" },
  { name: "Search Engine", description: "Search Engine" },
  { name: "Target.com", description: "Target.com" },
  { name: "Email", description: "Email" },
  { name: "Facebook", description: "Facebook" },
  { name: "Twitter", description: "Twitter" },
  { name: "Friend/Relative", description: "Friend/Relative" },
  { name: "Other", description: "Other" },
  { name: "Employee Benefit Program", description: "Employee Benefit Program" },
  { name: "Shelter Trial", description: "Shelter Trial" },
  { name: "Online Advertisement", description: "Online Advertisement" },
  { name: "Search Engine", description: "Search Engine" },
];










