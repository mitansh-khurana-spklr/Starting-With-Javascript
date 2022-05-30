function findSum(...args){
    let sum = 0;
    for(let index = 0; index < args.length; index++){
        sum += args[index];
    }
    return sum;
}

console.log(findSum(1,2,3));
console.log(findSum(1,2,3,4,5));
console.log(findSum(1,2,3,4,5,6,7));
