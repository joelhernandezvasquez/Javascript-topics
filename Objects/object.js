// Exercise 1: hasNameProperty

// Problem: Given an object, write a function to determine whether it has a property called "name".

// Function Signature: function hasNameProperty(obj: object): boolean

// Input:

// obj (object): An object to be checked.
// Output:

// Returns true if the object has a property called "name", and false otherwise.


// function hasNameProperty (object){
//     return object.hasOwnProperty('name');
// }

const defaultObject = {
    id:'1',
    name:'Joel Hernandez'
}

const alternateObject = {
    age:32,
    lastName:'Hernandez'
}

// console.log(hasNameProperty(defaultObject));

// Exercise 2: getPropertyNames

// Problem: Given an object, write a function to return an array containing all the property names present in the object.

// Function Signature: function getPropertyNames(obj: object): string[]

// Input:

// obj (object): An object.
// Output:



// function getPropertyNames(object){
//     return Object.keys(object);
// }
// console.log(getPropertyNames(defaultObject))


// Returns an array of strings representing the property names in the object.
// Exercise 3: getPropertyValues

// Problem: Given an object, write a function to return an array containing all the property values present in the object.

// Function Signature: function getPropertyValues(obj: object): any[]

// Input:

// obj (object): An object.
// Output:

// function getPropertyValues(object){
//     return Object.values(object);
// }

// console.log(getPropertyValues(defaultObject));

// Returns an array containing all the property values in the object.
// Exercise 4: getKeyValuePairs

// Problem: Given an object, write a function to return an array of arrays, where each inner array contains a key-value pair from the object.

// Function Signature: function getKeyValuePairs(obj: object): [string, any][]

// Input:

// obj (object): An object.
// Output:

// function getKeyValuePairs(object){
//     return Object.entries(object);
// }
// console.log(getKeyValuePairs(defaultObject))

// Returns an array of arrays, where each inner array represents a key-value pair from the object.
// Exercise 5: mergeObjects

// Problem: Given two objects, write a function to merge their properties and return a new object.

// Function Signature: function mergeObjects(obj1: object, obj2: object): object

// Input:

// obj1 (object): The first object to be merged.
// obj2 (object): The second object to be merged.
// Output:

// Returns a new object that merges the properties of obj1 and obj2.

// function mergeObjects(obj1,obj2){
//    return {
//     ...obj1,
//     ...obj2
//    }
// }
// console.log(mergeObjects(defaultObject,alternateObject));

// Exercise 6: createDynamicProperty

// Problem: Write a function that takes a key-value pair and returns a new object with a dynamic property based on the given key-value pair.

// Function Signature: function createDynamicProperty(key: string, value: any): object

// Input:

// key (string): The key for the property.
// value (any): The value for the property.
// Output:

// Returns a new object with a property whose name is the value of key and value is the value of value.
