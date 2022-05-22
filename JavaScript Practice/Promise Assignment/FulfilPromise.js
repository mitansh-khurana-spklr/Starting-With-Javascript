// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.
// Then, print the contents of the promise after if has been fulfilled by passing console.log to then.


promise = new Promise((resolve, reject) =>{
    setTimeout(() => {resolve("Fulfilled")}, 300);
})

promise.then((value) => {
    console.log(value);
})