   const resolvedPromise = (ms) => {
            setTimeout(() => {
                var promise = new Promise(function(resolve, reject) {
                    if(ms >= 500) {
                        resolve("Message : delayed promise");
                    }
                    else{
                        reject(Error("It broke"));
                    }
                });
                console.log(promise);
            }, ms)
        }

        resolvedPromise(500);

     const resolvedPromise = (ms) => {
            setTimeout(() => {
                var promise = new Promise(function(resolve, reject) {
                    if(ms >= 500) {
                        resolve("Message : delayed promise");
                    }
                    else{
                        reject(Error("It broke"));
                    }
                });
                console.log(promise);
            }, ms)
        }

        resolvedPromise(500);


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
