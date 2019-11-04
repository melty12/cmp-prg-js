"use strict";

function Main(input) {
  input = parseInt(input);
  let canBeCaluculated = "No";

  for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
      if (i * j === input) {
        canBeCaluculated = "Yes";
      } else {
        break;
      }
    }
  }

  console.log(canBeCaluculated);
}

Main(process.argv[2]);
