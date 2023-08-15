
/*
 Benefits of Closure is to remove variables from global scope and maintain that inside de closure.
 Another benefit is that the code and its variables is protected and encapsulated on the fruit function so data is only available
 through fruit function.

*/

function setObjectState() {
    const fruitState = {'fruit':''};
    
    const updateObjectState = (fruitValue) =>{
         fruitState.fruit = fruitValue;  
         console.log(fruitState);
    }

    return updateObjectState;
}

const fruit = setObjectState();
const fruitPrice = setObjectState();

document.querySelector('#mango').addEventListener('click',()=>{
    fruit('mango');
})

document.querySelector('#apple').addEventListener('click',()=>{
    fruit('apple');
})

document.querySelector('#pear').addEventListener('click',()=>{
    fruit('pear');
})

document.querySelectorAll('#price').forEach((button)=>{
  button.addEventListener('click',()=>{
    fruitPrice(button.textContent);
  })
})