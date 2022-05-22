function *createFlow(){
    yield 10;
    yield 20;
    yield 30;
}


const returnNext = createFlow();
console.log(returnNext.next());
console.log(returnNext.next());