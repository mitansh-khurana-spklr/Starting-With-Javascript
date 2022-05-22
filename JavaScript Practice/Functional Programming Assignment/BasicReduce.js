// Given an Array of strings, use Array#reduce to create an object that contains the number of 
// times each string occured in the array. Return the object directly (no need to console.log).

function countOccourence(inputWords){
    return inputWords.reduce((prev, curr) => {
            prev[curr] = ++prev[curr] || 1;
            return prev;
    }, {})
}

const inputArray = ["a", "b", "c", "a"];
console.log(countOccourence(inputArray));