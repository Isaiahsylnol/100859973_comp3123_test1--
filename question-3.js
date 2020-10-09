
  const rejectedPromise  = (ms) => {
    try {
        setTimeout(() => {
        if(ms <= 500){
              var promise = new Promise(function(resolve, reject) {
                resolve("Message : delayed exception!");     
        });
        }
        console.log(promise);
    }, ms)
        throw new Error("Error: rejected time");
    } catch(e){
        console.error(e);
    }
}
rejectedPromise(500);