const input = "5\n2 4 3 5 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const sequence = data[1].split(" ").map(str => parseInt(str, 10) - 1);
  let unCorrectSize = 0;
  let result = "NO";

  sequence.forEach((number, i) => {
    if (number !== i) {
      unCorrectSize += 1;
    }
  });

  if (unCorrectSize <= 2) {
    result = "YES";
  }

  console.log(result);
};

main(input);
