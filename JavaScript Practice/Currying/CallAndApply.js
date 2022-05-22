// Use call

var obj = {updateFunc : function(name, age, tShirtSize) {
    this.name = name;
    this.age = age;
    this.tShirtSize = tShirtSize;
  }
}

var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

var caller = function (person,
    update,
    name,         
    age,          
    size) {
        obj.updateFunc.call(person, name, age, size);
    };

console.log(person)