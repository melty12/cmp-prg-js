"use strict";

let input = "5 1\n100 200 300 400 500";

function Main(input) {
  input = input.split("\n");
  const rules = input[0].split(" ");
  const K = parseInt(rules[1]);
  const heightArr = input[1].split(" ").map(str => parseInt(str, 10));
  let result = 0;

  heightArr.forEach(height => {
    if (height >= K) {
      result += 1;
    }
  });

  console.log(input, rules, K, heightArr);
}

Main(input);
