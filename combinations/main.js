"use strict";

function Main(input) {
  let numbers = input.split(" ");
  let result = 0;

  numbers.forEach((number) => {
    numbers = numbers.slice(1)

    numbers.forEach((number2) => {
      result += number * number2;
    })
  });

  console.log(result);
}

Main(process.argv[2]);
