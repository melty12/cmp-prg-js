"use strict";

function Main(input) {
  let numbers = input.split(" ");
  let result = [];

  numbers.forEach((number, i) => {
    result.push(number * numbers[i]);
  });

  let sum = function(arr) {
    return arr.reduce(function(prev, current) {
      return prev + current;
    });
  };

  console.log(sum(result));
}

Main(process.argv[2]);
