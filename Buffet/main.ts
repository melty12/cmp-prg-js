let input = "3\n3 1 2\n2 5 4\n3 6";
let input2 = "4\n2 3 4 1\n13 5 8 24\n45 9 15";

const main = lines => {
  lines = lines.split("\n");
  const foodTypes = lines[1].split(" ").map(str => parseInt(str, 10));
  const satisfactions = lines[2].split(" ").map(str => parseInt(str, 10));
  const specialRule = lines[3].split(" ").map(str => parseInt(str, 10));
  let result = 0;

  foodTypes.forEach((food, index) => {
    result += satisfactions[food - 1];

    if (
      foodTypes[index] > foodTypes[index - 1] &&
      food - foodTypes[index - 1] === 1
    ) {
      result += specialRule[index];
    }
  });

  console.log(result);
};

main(input);
