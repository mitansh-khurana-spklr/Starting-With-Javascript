function curry(inputFunc){
    return function curried(...args){ // args will keep on increasing
        if(inputFunc.length !== args.length){
            return curried.bind(null, ...args);
        }
        return inputFunc(...args);
    };
}

function addition(num1, num2, num3){
    return num1 + num2 + num3;
}

const curriedAddition = curry(addition);
console.log(curriedAddition(1));
console.log(curriedAddition(1)(2));
console.log(curriedAddition(1)(2)(3));