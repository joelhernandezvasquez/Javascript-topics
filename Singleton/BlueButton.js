import useCounter from './Singleton.js';

const blueBtn = document.querySelector('.blueBtn');

blueBtn.addEventListener("click",()=>{
    useCounter.increment();
    console.log('blue btn clicked and counter total is ' + useCounter.getCount());
})
console.log(blueBtn);