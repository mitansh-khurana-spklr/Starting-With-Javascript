const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2);



const object1 = {
    name : 'Mitansh',
    age : 20
}

const object2 = {
    ...object1,
    college : "NSUT"
}

console.log(object2);

console.log(...array1);
// console.log(...object1); // Gives error
