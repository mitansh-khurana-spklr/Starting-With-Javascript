let myMammal = {
    name : "Herb",
    getName : function(){
        return this.name;
    },
    says : function(){
        return this.says.name;
    }
}


let cat = Object.create(myMammal);

cat.name = "Kitty";

console.log(cat.getName());