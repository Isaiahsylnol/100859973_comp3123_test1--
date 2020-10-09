const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
var sorted = [];

var lowerCaseWords = new Promise(function(resolve, reject) {
     for(i = 0; i < mixedArray.length; i++){
         if(typeof mixedArray[i] == 'string'){
            sorted.push(mixedArray[i].toLowerCase());
         }
     }
     resolve(sorted)
     
  reject(new Error("Error with the Array")); // ignored
});
 console.log(sorted)