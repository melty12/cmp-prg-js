let input = "5\n1 3 5 4 2";

const main = (lines: string) => {
  const data = lines.split("\n");
  const N = parseInt(data[0], 10);
  const p = data[1].split(" ").map(str => parseInt(str, 10));
  let result = 0;

  for (let i = 1; i < N - 1; i++) {
    if (
      (p[i - 1] < p[i] && p[i] < p[i + 1]) ||
      (p[i - 1] > p[i] && p[i] > p[i + 1])
    ) {
      result += 1;
    }
  }

  console.log(result);
};

main(input);
