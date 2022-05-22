// Write a unary function that takes single input and returns another unary
// function. On calling the second function, it should return the sum of the two
// inputs.


function outer(input1){
    function inner(input2){
        return input1 + input2;
    }
    return inner;
}


const innerFunc = outer(3);
console.log(innerFunc(4));