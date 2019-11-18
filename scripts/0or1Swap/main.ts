const input = "5\n5 2 3 4 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const sequence = data[1].split(" ").map(str => parseInt(str, 10));
  const order = getOrder(sequence);
  let unCorrectSize: boolean[] = [];
  let result = "NO";

  sequence.forEach((number, i) => {
    if (number !== order[i]) {
      unCorrectSize.push(true);
    }
  });

  if (unCorrectSize.length <= 2) {
    result = "YES";
  }

  console.log(result);
};

const getOrder = (sequence: number[]) => {
  const temp = sequence.slice();
  return temp.sort((a, b) => (a < b ? -1 : 1));
};

main(input);
