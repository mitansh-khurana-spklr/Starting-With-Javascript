// Now, using this knowledge, we will create a function that will take another
// function as argument (any function that we want to be curried) and convert it
// into a curried function.

function addFlexible(value){
    function add(input){
        return input + value;
    }
    return add;
}

const add2 = addFlexible(2);
const add10 = addFlexible(10);
console.log(add2(12));
console.log(add10(100));