let input = "3\n3 1 2\n2 5 4\n3 6";
let input2 = "4\n2 3 4 1\n13 5 8 24\n45 9 15";

const main = (lines: string) => {
  const data = lines.split("\n");
  const foodTypes = data[1].split(" ").map(str => parseInt(str, 10) - 1);
  const satisfactions = data[2].split(" ").map(str => parseInt(str, 10));
  let specialRule = data[3].split(" ").map(str => parseInt(str, 10));
  let result = 0;

  foodTypes.forEach((_, i) => {
    result += satisfactions[foodTypes[i]];

    if (i >= 1 && foodTypes[i] - foodTypes[i - 1] === 1) {
      result += specialRule[foodTypes[i - 1]];
    }
  });

  console.log(result);
};

main(input2);
