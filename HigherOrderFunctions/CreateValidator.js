

const createValidator = (validatedFunction) =>{
    return (input) =>{
       return validatedFunction(input);
    }
}

const passwordValidator = createValidator((input) => input.length >= 6);

const isPasswordValid = passwordValidator('jjjjdfsdfsdfsdf');

console.log(isPasswordValid);

  