
let instance = null;

const useCounter  = () =>{
    let counter = 0;

    if(instance){
        throw new Error('Instance of counter already exist');
    }

    const getCount = () =>{
        return counter;
    }

    const increment = (value = 1) =>{
      counter += value;
    }

    const decrement = (value = 1) =>{
     counter -= value;
    }
     
    instance = {
        getCount,
        increment,
        decrement 
    }
   return instance;
}

const singletonCounter = Object.freeze(useCounter());
export default singletonCounter;


