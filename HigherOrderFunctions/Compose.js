

const compose =  (...functions) => {
   
  return (...args) =>{
    let result = functions.at(-1)(...args);
    
    functions.toReversed().splice(1).map((fn)=>{
      result = fn(result);
    })
   
    return result;
  }
}

const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract1 = x => x - 1;

const finalFunction = compose(subtract1,multiply2,add5);
console.log(finalFunction(10))


