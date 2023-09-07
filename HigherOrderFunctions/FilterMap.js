const filterMap = (arr,filterFn,mapFn) =>{
    const result = [];
    
    arr.forEach(element => {
       if(filterFn(element)){
         result.push(mapFn(element))
       }
    });
    return result;
  }
  
    
    // Example usage:
    const numbers = [1, 2, 3, 4, 5];
    const evenSquared = filterMap(
      numbers,
      num => num % 2 === 0,
      num => num * num
    );
    console.log(evenSquared); // Output: [4, 16]