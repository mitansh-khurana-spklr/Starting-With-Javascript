// Construct a promise chain that returns values to prove to yourself that promise handlers will wrap your 
// returned values in promises allowing additional chaining.
// Declare a function attachTitle which prepends 'DR. ' to its first argument and returns the result.
// Create a fulfilled promise with a value of 'MANHATTAN'.
// Build a promise chain off the promise we just constructed that first callsattachTitle then calls console.log


const attachTitle = name => `DR. ${name}`;
const promise = Promise.resolve('MANHATTAN');

promise
  .then(attachTitle)
  .then(console.log);