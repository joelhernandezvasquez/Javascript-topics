
let store = null;

const petStore = () =>{
  
    if(store){
        throw new Error ('it can only be one store instance');
    }

    const getPet = (petId) =>{
      return store.pets.find((pet) => pet.petId === petId);
    }

    const addAPet = (petId) =>{
    
      if(!store.pets){
        store.pets = new Array({petId});
        return;
     }

     const isPetExist = getPet(petId);
      
     if(isPetExist) throw new Error('pet already exist');

     store.pets = [...store.pets,{petId}];
    }

    const setPlanToPet = (petId,plan) =>{
     let petUpdated = store.pets.find((pet)=> pet.petId === petId);

     if(!petUpdated) throw Error('plans cannot be added due to pet is not found');
     
     petUpdated = {...petUpdated,plan};

     const pets = store.pets.map((pet) => petId === pet.petId ? petUpdated:pet );
     store.pets = pets;
    }

    const setPreventiveToPet = (petId,preventiveType) => {
      let petUpdated = store.pets.find((pet)=> pet.petId === petId);

      if(!petUpdated) throw Error('plans cannot be added due to pet is not found');

      petUpdated = {...petUpdated,preventiveType};

      const pets = store.pets.map((pet) => petId === pet.petId ? petUpdated:pet );
      store.pets = pets;
    }

    const removePet = (petId) =>{
      const pets = store.pets.filter((pet)=> pet.petId !== petId);
      store.pets = pets;
    }

    const getAllPets = () =>{
        return store.pets;
    }

  return store = {
    addAPet,
    removePet,
    setPlanToPet,
    setPreventiveToPet,
    getAllPets,
  }
}
const PetStore = petStore();
export default PetStore;

