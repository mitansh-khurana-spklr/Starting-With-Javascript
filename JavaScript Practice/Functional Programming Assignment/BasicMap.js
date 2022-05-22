// Convert code from a for-loop to Array#map:

function doubleAll(numbers) {
    return numbers.map(function(n){
        return n * 2;
    });
  }


doubleAll([1, 2, 3]); 