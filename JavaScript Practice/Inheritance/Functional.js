let mammal = function(spec){
    let that = {};

    that.getName = function(){
        return spec.name;
    }

    that.says = function(){
        return spec.saying;
    }

    return that;
}

let myMammal = mammal({name : "Herb"});


let cat = function(spec){
    spec.saying = spec.saying || 'meow';

    let that = mammal(spec);

    that.getName = function(){
        return that.says() + " " + spec.name;
    }

    return that;
}

let myCat = cat({name : "Kitty"});
console.log(myCat.getName());