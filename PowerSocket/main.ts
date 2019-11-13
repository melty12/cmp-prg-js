let input = "8 8";

const main = lines => {
  const data = lines.split(" ");
  let division = parseInt(data[0], 10);
  let targetValue = parseInt(data[1], 10);
  let result = 0;

  console.log(Math.floor((division - 2 + (targetValue - 1)) / (division - 1)));
};

main(input);
