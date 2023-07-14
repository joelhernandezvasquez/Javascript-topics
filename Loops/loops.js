const data = [
    { name: "0470", description: "Television" },
    { name: "0472", description: "Friend/Relative" },
    { name: "0476", description: "Other" },
    { name: "0480", description: "Internet" },
    { name: "101HazBook", description: "Free 101 Pet Hazards Guide" },
    { name: "1636", description: "Veterinarian Office" },
    { name: "Google", description: "Google Search" },
    { name: "Yahoo", description: "Yahoo Search" },
    { name: "H0472", description: "Friend/Relative" },
    { name: "H0476", description: "Other" },
    { name: "H0480", description: "Internet" },
    { name: "PHCPPREPOL", description: "Previous Policy Holder" },
    { name: "PPI0472", description: "Friend" },
    { name: "PPI0480", description: "Internet" },
    { name: "PPI0476", description: "Other" },
    { name: "PPI0470", description: "Television" },
    { name: "PPI0473", description: "Radio" },
    { name: "PPIEML", description: "E-Mail" },
    { name: "Employee Benefit Program", description: "Employee Benefit Program" },
    { name: "NRA Mail Letter", description: "NRA Mail Letter" },
    { name: "PETIWEBSITE", description: "PetInsured Website" },
    { name: "PETIEML", description: "E-Mail" },
    { name: "PETI0472", description: "Friend/Relative Referral" },
    { name: "PETI0480", description: "Internet" },
    { name: "PETIMAIL", description: "Mail Letter" },
    { name: "PETIVET", description: "My Veterinarian\u0027s Office" },
    { name: "Online Advertisement", description: "Online Advertisement" },
    { name: "PIRWEBSITE", description: "Pet Insurance Review Website" },
    { name: "Search Engine", description: "Search Engine" },
    { name: "Target.com", description: "Target.com" },
    { name: "Email", description: "Email" },
    { name: "Facebook", description: "Facebook" },
    { name: "Twitter", description: "Twitter" },
    { name: "Friend/Relative", description: "Friend/Relative" },
    { name: "Other", description: "Other" },
    { name: "Employee Benefit Program", description: "Employee Benefit Program" },
    { name: "Shelter Trial", description: "Shelter Trial" },
    { name: "Online Advertisement", description: "Online Advertisement" },
    { name: "Search Engine", description: "Search Engine" },
  ];


  const theObject = {
    name: "Online Advertisement", description: "Online Advertisement", count:1
  }

  const iterateForOf = () =>{
     for(element of data){
        console.log(element.name);
     }
  }

  const iterateForIn = () =>{
    for(element in theObject){
       console.log(element);
    }
 }
//   console.log( iterateForOf())
  console.log( iterateForIn())


  