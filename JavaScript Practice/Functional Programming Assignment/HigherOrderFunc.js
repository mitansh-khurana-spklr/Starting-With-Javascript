// Implement a function that takes a function as its first argument, a number num as 
// its second argument, then executes the passed in function num times.

function repeat(func, num) {
  if (num <=0 ) return;
  func();
  return repeat(func, --num);
}


function printHello(){
  console.log("Hello");
}

repeat(printHello, 10);