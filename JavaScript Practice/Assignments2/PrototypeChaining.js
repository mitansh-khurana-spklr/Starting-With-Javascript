// Person
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.getAge;
}



// Employee
function Employee(name, age, empID){
    Person.call(this, name, age);
    this.empID = empID;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getEmpID = function(){
    return this.empID;
}




// ProjectHead
function ProjectHead(name, age, empID, projectName){
    Employee.call(this, name, age, empID);
    this.projectName = projectName;
}

ProjectHead.prototype = Object.create(Employee.prototype);

ProjectHead.prototype.getProjectName = function(){
    return this.projectName;
}




const person1 = new Person("Mitansh", 20);
const employee1 = new Employee("Saurav", 18, 120);
const projectHead1 = new ProjectHead("Rahul", 22, 89, "Mobile Dev");

console.log(ProjectHead.prototype);
console.log(Employee.prototype);
console.log(Person.prototype);

