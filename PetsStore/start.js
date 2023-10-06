
import PetStore from './petsSingleton.js';

const btn  = document.querySelector('.addPet');
const addAnotherPet = document.querySelector('.addAnotherPet');

btn.addEventListener("click",()=>{
    PetStore.addAPet('per-45');
    console.log(PetStore.getAllPets())
})

addAnotherPet.addEventListener("click",()=>{
    PetStore.addAPet('per-40');
    console.log(PetStore.getAllPets())
})