// Normal function in class ES6
class SomeClass {
    constructor() {
        this.someProp = 'someValue';
    }
    someMethod() {
        console.log(this.someProp);
    }
}


// Arrow function in class ES6
class SomeClass {
    constructor() {
        this.someProp = 'someValue';
    }
    someMethod = () => { // Arrow function
        console.log(this.someProp);
    }
}


// Normal function in class converted to ES5
var SomeClass = function() {
    this.someProp = 'someValue';
}
SomeClass.prototype.someMethod = function() {
    console.log(this.someProp);
}
var instance = new SomeClass();


// Arrow function in class converted to ES5
var SomeClass = function() {
    this.someProp = 'someValue';
    var _that = this;
    this.someMethod = function() {
        console.log(_that.someProp);
    }
}
var instance = new SomeClass();

