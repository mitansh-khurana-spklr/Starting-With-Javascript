// Use Array#reduce to implement a simple version of Array#map.

function mapper(array, func){
    const mapReduce = array.reduce((prev, curr) => {
        prev.push(func(curr));
        return prev;
    }, [])

    return mapReduce;
}


function func(num){
    return num*2;
}

console.log(mapper([1,2,3], func));
