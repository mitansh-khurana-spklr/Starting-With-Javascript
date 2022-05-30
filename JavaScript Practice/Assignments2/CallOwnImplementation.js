Function.prototype.myCall = function(context){
    context = context ? Object(context) : window; // context points to object
    context.callerFunc = this; // this points to function/method

    const args = [];
    for(let index = 1; index < arguments.length; index++){
        args.push('arguments[' + index + ']');
    }

    const stringFunction = 'context.callerFunc(' + args + ')';
    const result = eval(stringFunction);
    return result;
}


function test(){
    console.log(this);
    console.log(arguments);
}

const myObject = {
    name : "Mitansh",
    age : 20
}

test.myCall(myObject, 'Argument1', 'Argument2');