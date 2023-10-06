import PetStore from './petsSingleton.js';

const btnPlan  = document.querySelector('.addPlan');
const btnPreventive  = document.querySelector('.addPreventive');
const btnPreventive2  = document.querySelector('.addPreventive2');
const btnPlan2  = document.querySelector('.addAnotherPet2');

btnPlan.addEventListener("click",()=>{
    PetStore.setPlanToPet('per-45','complete coverage');
    console.log(PetStore.getAllPets())
})

btnPreventive.addEventListener("click",()=>{
    PetStore.setPlanToPet('per-45','complete coverage');
    console.log(PetStore.getAllPets())
})

btnPlan2.addEventListener("click",()=>{
    PetStore.setPlan('per-40','basic');
    console.log(PetStore.getAllPets())
})

btnPreventive2.addEventListener("click",()=>{
    PetStore.setPlanToPet('per-40','complete coverage');
    console.log(PetStore.getAllPets())
})

