function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.age;
}



function Student(name, age, course){
    Person.call(this, name, age);
    this.course = course;
}

Student.prototype = new Person();

Student.prototype.getCourse = function(){
    return this.course;
}

const person1 = new Person("Mitansh", 20);
console.log(person1.getName());

const student1 = new Student("Rahul", 18, "BTech");
console.log(student1.getName());
console.log(student1.getCourse());
