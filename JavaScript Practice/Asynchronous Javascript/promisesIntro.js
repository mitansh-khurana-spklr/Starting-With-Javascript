var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('Resolved!');
    }, 1000);
});

promise.then(function(value) {
    console.log(value)
});
