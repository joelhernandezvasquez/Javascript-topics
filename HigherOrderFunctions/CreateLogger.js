
const createLogger = (logLevel) => {

    return (message) =>{
        return `${logLevel} ${Date.now()}:${message}`;
    }
}
  
  // Example usage:
  const infoLogger = createLogger('INFO');
  const errorLogger = createLogger('ERROR');
  
  console.log(infoLogger('User logged in')); // Output: [INFO] <timestamp>: User logged in
  console.log(errorLogger('Database connection failed')); // Output: [ERROR] <timestamp>: Database connection failed
  