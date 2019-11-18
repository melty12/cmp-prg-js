let input = "2\n10 30";

const main = (lines: string) => {
  const data = lines.split("\n");
  const columns = data[1].split(" ").map(str => parseInt(str, 10));
  const maxValue = Math.max.apply(null, columns);
  let results = 0;

  columns.forEach(column => {
    let n = maxValue / column;
    results += maxValue / column;
  });

  console.log(maxValue / results);
};

main(input);
