function concatFunc(noun){
    promise = new Promise((resolve, reject) => {
        resolve(noun + " givenVerb");
    })

    return promise;
}

async function asyncFunc(noun){
    const output = await concatFunc(noun);
    console.log(output);
}

asyncFunc("cat");
