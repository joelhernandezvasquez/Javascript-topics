
function createCounter () {
 let counter = 0;
    
    function increment(){
      counter++
      return counter;
    }

    function decrement(){
        counter--;
        return counter;
    }

   function reset (){
    counter = 0;
    return counter;
   }

   return{
    'increment':increment,
    'decrement':decrement,
    'reset':reset,
    'counter':counter
   }
}

const counter1 = createCounter();
const counter2 = createCounter()


document.querySelector(".incrementBtn").addEventListener('click',()=>{
   
    console.log(counter1.increment());
     
})

document.querySelector(".decrementBtn").addEventListener('click',()=>{
   
    console.log(counter1.decrement());
    //document.querySelector(".counter").textContent = counter1().counter;
})

document.querySelector(".incrementBtn2").addEventListener('click',()=>{
   
    console.log(counter2.increment());
     
})

document.querySelector(".decrementBtn2").addEventListener('click',()=>{
   
    console.log(counter2.decrement());
    //document.querySelector(".counter").textContent = counter1().counter;
})