function foundAfter(array){
    let index = 0;
    function inner(){
        let output;
        if(index === 0){
            output = array[index] + " is the first element";
        }
        else{
            output = array[index] + " was found after index " + (index-1);
        }
        index++;
        return output;ß
    }
    return inner;
}


const input = [10, 20, 30];
const getNext = foundAfter(input);
console.log(getNext());
console.log(getNext());
console.log(getNext());