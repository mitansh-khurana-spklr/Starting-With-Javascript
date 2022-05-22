let person = {
    fullName : function(){
        return this.firstName + " " + this.secondName;
    }
}

let person1 = {
    firstName : "Mitansh",
    secondName : "Khurana"
}

console.log(person.fullName.call(person1));