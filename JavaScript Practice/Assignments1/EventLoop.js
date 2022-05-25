class Stack {
    constructor()
    {
        this.items = [];
    }
  
    push(element){
    this.items.push(element);
    }

    pop(){
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length == 0;
    }
}

class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    getLength() {
      return this.tail - this.head;
    }
    isEmpty() {
      return this.length === 0;
    }
  }


const syncFunc1 = () => {
    console.log("Running synchFunc1");
}
const syncFunc2 = () => {
    console.log("Running synchFunc2");
}
const syncFunc3 = () => {
    console.log("Running synchFunc3");
}
const syncFunc4 = () => {
    console.log("Running synchFunc4");
}


const AsyncFunc1 = () => {
    console.log("Running AsyncFunc1");
}
const AsyncFunc2 = () => {
    console.log("Running AsyncFunc2");
}


let callStack = new Stack();
callStack.push(syncFunc1);
callStack.push(syncFunc2);
callStack.push(syncFunc3);
callStack.push(syncFunc4);

let callBackQueue = new Queue();
callBackQueue.enqueue(AsyncFunc1);
callBackQueue.enqueue(AsyncFunc2);


while(!callBackQueue.isEmpty() && !callStack.isEmpty()){
    // console.log(callStack.peek())
    while(!callStack.isEmpty()){
        callStack.peek()();
        callStack.pop();
    }
    if(!callBackQueue.isEmpty()){
        callStack.push(callBackQueue.dequeue());
    }
}





