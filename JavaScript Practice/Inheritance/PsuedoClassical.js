let Mammal = function(name){
    this.name = name;
}

Mammal.prototype.getName = function(){
    return this.name;
}

Mammal.prototype.says = function(){
    return this.saying || "";
}

let myMammal = new Mammal("Herb");
console.log(myMammal.getName());



let Cat = function(name){
    this.name = name;
    this.saying = "meow";
}

Cat.prototype = new Mammal();

let myCat = new Cat("Henny");
console.log(myCat.says());