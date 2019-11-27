let input = "3\n1 2 3";

const main = (lines: string) => {
  const data = lines.split("\n");
  const N = parseInt(data[0]);
  const weights = data[1].split(" ").map(str => parseInt(str));
  const maxWeight = Math.max.apply(null, weights);
  let temp = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      console.log(maxWeight);
    }
  }
};

main(input);
