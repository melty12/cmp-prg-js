let input = "4 10";

const main = (lines: string) => {
  const data = lines.split(" ");
  let division = parseInt(data[0], 10) - 1;
  let targetValue = parseInt(data[1], 10) - 1;

  console.log(Math.ceil(targetValue / division));
};

main(input);
