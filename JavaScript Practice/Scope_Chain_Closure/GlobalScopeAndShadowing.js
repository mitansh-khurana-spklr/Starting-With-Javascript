// Starting with your solution from the previous lesson, assign a value to the global variable
// quux inside foo() (don't use var or let). Create a shadow variable in of quux
// inside zip(). The value in the global variable quux has to be different than the
// value of quux inside zip().

function foo(){
    var bar;
    quux = "Hello"
    function zip(){
        var quux = 20;
    }
}