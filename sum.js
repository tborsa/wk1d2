// grab all the command line arguments
// discard the first two arguments

const getArguments = function() {
  return process.argv.slice(2);
};
//console.log(getArguments());

// Change the arguments into numbers
// Check if the argument is a valid integer
const numberize = function(arrArguments) {
  let integerArray = [];
  for (let argument of arrArguments) {
    let maybeNumber = Number(argument);
    if(maybeNumber && Number.isInteger(maybeNumber)){
      integerArray.push(maybeNumber);
    }else{
      // it is not a number
      console.log("error not an integer");
    }
  }
  return integerArray;
};

// const testArray = ["one", 2 , "dog"];
// console.log(numberize(testArray));

// call a function to add the numbers
// looping through arguments/numbers

const sumArguments = function(arrIntegers){
  let total = 0;
  for(let integer of arrIntegers){
    total += integer;
  }
  return total;
}

let testIntegers = [2,3,4,5];
console.log(sumArguments(testIntegers));
