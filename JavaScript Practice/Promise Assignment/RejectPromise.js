// Create a promise that after a delay of 300ms, rejects with an Error object. T
// he Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.

// Create a function onReject to print error.message using console.log. 
// Pass this function as a rejection handler to the then method of your promise.



promise = new Promise((resolve, reject) =>{
    setTimeout(() => {reject({message : "REjected!"})}, 300);
})

promise.catch((value) => {
    console.log(value.message);
})