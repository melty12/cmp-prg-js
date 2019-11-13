let input = "8 8";

const main = lines => {
  const data = lines.split(" ");
  let division = parseInt(data[0], 10) - 1;
  let targetValue = parseInt(data[1], 10) - 1;
  let result = 0;

  console.log(Math.floor((division - 1 + targetValue) / division));
};

main(input);
