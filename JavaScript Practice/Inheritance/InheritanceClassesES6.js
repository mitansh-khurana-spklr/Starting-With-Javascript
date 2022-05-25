class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
}

class Student extends Person{
    constructor(name, age, course){
        super(name, age);
        this.course = course;
    }

    getCourse(){
        return this.course;
    }
}

const person1 = new Person("Mitansh", 20);
console.log(person1.getAge());
console.log(person1.getName());

const student1 = new Student("Rahul", 18, "BTech");
console.log(student1.getName());
console.log(student1.getCourse());