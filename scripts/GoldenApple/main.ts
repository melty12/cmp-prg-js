let input = "20 4";

const main = (lines: string) => {
  const data = lines.split(" ");
  const treeSize = parseInt(data[0], 10);
  const coverableRange = parseInt(data[1], 10) * 2 + 1;

  console.log(Math.ceil(treeSize / coverableRange));
};

main(input);
