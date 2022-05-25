// Bind function implementation
Function.prototype.ownBind = function(context, ...args1){
    const funcReference = this;
    return function(...args2){
        return funcReference.apply(context, [...args1, ...args2]);
    }
}

function curry(inputFunc){
    return function curried(...args){ // args will keep on increasing
        if(inputFunc.length !== args.length){
            return curried.ownBind(null, ...args);
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