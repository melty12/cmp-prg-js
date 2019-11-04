"use strict";

function Main(input)
{
  input = input.split(" ");
  let result = "-1"

  if (
    input[0] >= 1 && input[0] <= 9 &&
    input[1] >= 1 && input[1] <= 9
  )
  {
    result = input[0] * input[1];
  }

  console.log(result)
}

Main(process.argv[2]);