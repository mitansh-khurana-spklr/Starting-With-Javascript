const secondPromise = new Promise((resolve, reject) => {
    resolve('Second!');
});

const firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise);
})

firstPromise.then(promise => promise).then(value => console.log(value));