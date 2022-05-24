// Write a function that takes one argument for each invocation. Each time it is
// called, it should add its argument to a running total and return itself. If it is called with no
// arguments, it should return the sum of all the arguments passed.

function currying(){
    let sum = 0;

    function innerCurry(value){
        if(value === undefined){
            return sum;
        }
        else{
            sum += value;
            return innerCurry;
        }
    }
    return innerCurry;
}

const addSum = currying();
console.log(addSum(10)(10)(10)(10)());
