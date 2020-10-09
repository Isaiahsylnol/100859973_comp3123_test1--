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