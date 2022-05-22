function outerIterator(array){
    let index = 0;
    function innerIterator(){
        const returnValue = array[index];
        index++;
        return returnValue;
    }
    return innerIterator;
}

const input = [1,2,3,4]
const nextElement = outerIterator(input);
const element1 = nextElement();
const element2 = nextElement();
console.log(element1);
console.log(element2);