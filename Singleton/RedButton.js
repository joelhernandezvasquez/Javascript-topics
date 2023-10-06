import useCounter from './Singleton.js';

const redBtn = document.querySelector('.redBtn');

redBtn.addEventListener("click",()=>{
    useCounter.increment();
    console.log('red button clicked and counter total is ' + useCounter.getCount());
})