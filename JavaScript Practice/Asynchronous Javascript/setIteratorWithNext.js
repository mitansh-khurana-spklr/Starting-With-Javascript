function setIterator(mySet) {
    const arrayFromSet = Array.from(mySet);
    let i =0;

    const inner = {
        next: () => {
            const element = arrayFromSet[i];
            i++;

            return element;
        }
    }

    return inner;
}

const mySet = new Set('hey');
const iterateSet = setIterator(mySet);

console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'