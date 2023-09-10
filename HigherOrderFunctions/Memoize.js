
const memoize = (fn) => {
   const cache = {};

   return (num) =>{
     if(cache[num]){
        return cache[num];
     }
     const result = fn(num);
     cache[num] = result;
     return cache[num];
   }

  }
  
  // Example usage:
  const expensiveFunction = x => {
    console.log(`Calculating for ${x}`);
    return x * 2;
  };
  
  const memoizedFunction = memoize(expensiveFunction);
  console.log(memoizedFunction(5)); // Output: Calculating for 5, 10
  console.log(memoizedFunction(5)); // Output: 10 (cached)
  console.log(memoizedFunction(10)); // Output: Calculating for 10, 20
  console.log(memoizedFunction(10)); // Output: 20 (cached)
  