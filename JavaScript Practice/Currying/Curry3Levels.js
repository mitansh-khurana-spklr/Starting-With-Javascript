// Add function for 3 variables
// Each variable seperated through currying

function add(value1){
    function addOnce(value2){
        function addTwice(value3){
            return value1 + value2 + value3;
        }
        return addTwice;
    }
    return addOnce;
}

const add10 = add(10);
const add20 = add10(10);
console.log(add20(50));