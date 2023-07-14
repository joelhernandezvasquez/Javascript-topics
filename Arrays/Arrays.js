// Write a set of JavaScript functions to perform various operations on arrays.

// flattenArray(arr: any[]): any[]

// Flatten the given array arr into a single-dimensional array.
// Example: flattenArray([1, [2, [3, [4]], 5]]) should return [1, 2, 3, 4, 5].

const flattenArray = (array) =>{
    return array.flat(Infinity);
}

// console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

//sliceArray(arr: any[], start: number, end: number): any[]
// Slice the given array arr from the start index (inclusive) to the end index (exclusive).
// Example: sliceArray([1, 2, 3, 4, 5], 1, 4) should return [2, 3, 4].

const sliceArray = (arr,start,end) =>{
    return arr.slice(start,end);
}

// console.log(sliceArray([1, 2, 3, 4, 5], 1, 4))

// spliceArray(arr: any[], start: number, deleteCount: number, ...items: any[]): any[]
// Splice the given array arr, starting from the start index, removing deleteCount elements, and optionally inserting the given items.
// Example: spliceArray([1, 2, 3, 4, 5], 2, 2, 'a', 'b', 'c') should return [1, 2, 'a', 'b', 'c', 5].

const spliceArray = (arr, start,deleteCount,items = []) =>{
  return arr.toSpliced(start,deleteCount,...items);
}

// console.log(spliceArray([1, 2, 3, 4, 5],2, 2,['a', 'b', 'c']));

// includesElement(arr: any[], element: any): boolean
// Check if the given array arr contains the specified element.
// Example: includesElement([1, 2, 3, 4, 5], 3) should return true.

const includesElement = (arr,element) =>{
  return arr.includes(element);
}

// console.log(includesElement([1, 2, 3, 4, 5], 3))

// sortArray(arr: any[]): any[]
// Sort the given array arr in ascending order.
// Example: sortArray([3, 1, 4, 2, 5]) should return [1, 2, 3, 4, 5].

const sortArray = (arr) =>{
 return  arr.sort((a,b)=>{
    return a - b;
  })
}

//console.log(sortArray([3, 1, 4, 2, 5]))

// indexOfElement(arr: any[], element: any): number
// Find the index of the first occurrence of the specified element in the given array arr.
// Example: indexOfElement([1, 2, 3, 4, 5], 3) should return 2.

const indexOfElement = (arr,element) =>{
  if(arr.indexOf(element) < 0) return 'element not found';

  return arr.indexOf(element);
}

console.log(indexOfElement([1, 2, 3, 4, 5], 3));

// reverseArray(arr: any[]): any[]
// Reverse the order of elements in the given array arr.
// Example: reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1].
// Implement the above functions using the provided array methods: spread operator, Array.from, iterating arrays (for loop or forEach), map, filter, find, findIndex, every, some, reduce, and other relevant array methods.

// Feel free to add additional helper functions if needed.

// Note: The above examples are provided for clarification and testing purposes. You can create additional test cases to verify the correctness of your implementations.

// Have fun coding! Let me know if you need any further assistance.





// User
// I want more challenge like 15
// ChatGPT
// Sure! Here are 15 additional coding challenges that cover various topics related to arrays:

// Challenge 1: Array Chunking
// Write a function chunkArray(arr: any[], size: number): any[][] that takes an array arr and a chunk size size, and returns a new array with the original array split into chunks of the specified size.

// Example:
// chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].

// Challenge 2: Array Intersection
// Write a function intersection(arr1: any[], arr2: any[]): any[] that takes two arrays arr1 and arr2, and returns a new array containing the common elements between the two arrays.

// Example:
// intersection([1, 2, 3, 4], [3, 4, 5, 6]) should return [3, 4].

// Challenge 3: Array Difference
// Write a function difference(arr1: any[], arr2: any[]): any[] that takes two arrays arr1 and arr2, and returns a new array containing the elements that are present in arr1 but not in arr2.

// Example:
// difference([1, 2, 3, 4], [3, 4, 5, 6]) should return [1, 2].

// Challenge 4: Array Sum
// Write a function sumArray(arr: number[]): number that takes an array of numbers arr and returns the sum of all the numbers in the array.

// Example:
// sumArray([1, 2, 3, 4, 5]) should return 15.

// Challenge 5: Array Average
// Write a function averageArray(arr: number[]): number that takes an array of numbers arr and returns the average of all the numbers in the array.

// Example:
// averageArray([1, 2, 3, 4, 5]) should return 3.

// Challenge 6: Array Frequency
// Write a function frequencyArray(arr: any[]): { [key: string]: number } that takes an array arr and returns an object where the keys are the unique elements from the array, and the values are the frequencies of those elements in the array.

// Example:
// frequencyArray(['a', 'b', 'a', 'c', 'b', 'a']) should return { 'a': 3, 'b': 2, 'c': 1 }.

// Challenge 7: Array Union
// Write a function union(arr1: any[], arr2: any[]): any[] that takes two arrays arr1 and arr2, and returns a new array containing all the unique elements from both arrays.

// Example:
// union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].

// Challenge 8: Array Rotation
// Write a function rotateArray(arr: any[], steps: number): any[] that takes an array arr and a number of steps steps, and returns a new array where the elements of the original array are rotated to the right by the specified number of steps.

// Example:
// rotateArray([1, 2, 3, 4, 5], 2) should return [4, 5, 1, 2, 3].

// Challenge 9: Array Palindrome
// Write a function isPalindrome(arr: any[]): boolean that takes an array arr and returns trueChallenge 9 (continued): if the array is a palindrome (reads the same forwards and backwards), and false` otherwise.

// Example:
// isPalindrome([1, 2, 3, 2, 1]) should return true.
// isPalindrome([1, 2, 3, 4, 5]) should return false.

// Challenge 10: Array Shuffle
// Write a function shuffleArray(arr: any[]): any[] that takes an array arr and returns a new array with the elements randomly shuffled.

// Example:
// shuffleArray([1, 2, 3, 4, 5]) could return [3, 1, 5, 4, 2].

// Challenge 11: Array Deduplication
// Write a function deduplicateArray(arr: any[]): any[] that takes an array arr and returns a new array with all the duplicate elements removed, preserving the original order.

// Example:
// deduplicateArray([1, 2, 3, 2, 4, 1]) should return [1, 2, 3, 4].

// Challenge 12: Array Chunking (Alternate)
// Write a function chunkArrayAlternate(arr: any[], size: number): any[][] that takes an array arr and a chunk size size, and returns a new array with the original array split into chunks of the specified size. However, this time, if the last chunk has fewer elements than the specified size, it should still be included.

// Example:
// chunkArrayAlternate([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].

// Challenge 13: Array Zip
// Write a function zipArrays(arr1: any[], arr2: any[]): any[] that takes two arrays arr1 and arr2 of equal length, and returns a new array where each element is an array containing the corresponding elements from the input arrays.

// Example:
// zipArrays([1, 2, 3], ['a', 'b', 'c']) should return [[1, 'a'], [2, 'b'], [3, 'c']].

// Challenge 14: Array Mode
// Write a function modeArray(arr: any[]): any[] that takes an array arr and returns an array containing the mode(s) of the array (the element(s) that appear most frequently). If there are multiple modes, they should all be included.

// Example:
// modeArray([1, 2, 2, 3, 3, 4, 4, 4]) should return [4].

// Challenge 15: Array Partition
// Write a function partitionArray(arr: any[], condition: (element: any) => boolean): [any[], any[]] that takes an array arr and a condition function condition. It should partition the array into two new arrays: one containing the elements that satisfy the condition, and the other containing the elements that do not.

// Example:
// partitionArray([1, 2, 3, 4, 5], (element) => element % 2 === 0) should return [[2, 4], [1, 3, 5]].

// Feel free to implement these challenges using a combination of the provided array methods and other relevant techniques. Let me know if you have any questions or need further clarification!