let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject("Rejected!");
    }, 1000)
})

promise.catch(function(value){
    console.log(value);
})