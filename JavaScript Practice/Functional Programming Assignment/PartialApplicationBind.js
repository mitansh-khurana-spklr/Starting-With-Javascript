// Partial Application using bind

function greeting(greet, name){
    return greet + " " + name;
}

const morningGreeting = greeting.bind(null, "Good Morning");

console.log(morningGreeting("Mitansh"));