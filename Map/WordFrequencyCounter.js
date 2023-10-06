const text = "This is a sample text. This text is just a sample.";

/*
[x] - need to read and consider the space no words
[x] need to loop through the text
[x] - read each word
[x] - convert the word enterely lowercase so we avoid case sensitive case
6 - if the word does not exist in the map then we add the word as key
    and assign it 1 as the counter
7- if the word does exist in the map then we increment the value by one
8 - when the loop finishes then we print the map value
*/

const wordsMap = new Map();

const words = text.split(' ');
words.forEach(word => {
 const wordCaseSensitive = word.replace(".","").toLowerCase(word);
 
  if(!wordsMap.has(wordCaseSensitive)){
    wordsMap.set(wordCaseSensitive,1);
    console.log('does not have it');
  }
  else{
    wordsMap.set(wordCaseSensitive,wordsMap.get(wordCaseSensitive) + 1);
    console.log('it has it ')
  }

});

console.log(wordsMap)



