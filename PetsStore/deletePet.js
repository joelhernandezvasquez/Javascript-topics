import PetStore from './petsSingleton.js';

const btnDelete  = document.querySelector(".deletePet");

btnDelete.addEventListener("click",()=>{
    PetStore.removePet('per-45');
    console.log('delete')
    console.log(PetStore.getAllPets())
})