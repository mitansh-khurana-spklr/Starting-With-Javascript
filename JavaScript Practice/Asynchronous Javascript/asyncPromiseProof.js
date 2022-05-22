promise = new Promise(function (resolve, reject) {
    resolve("Resolved");
  });
  
  
  promise.then(() => console.log('Promise has been resolved!'));
  console.log("I'm not the promise!");
  