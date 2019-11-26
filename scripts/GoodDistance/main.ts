let input = "3 2\n1 2\n5 5\n-2 8";

const main = (lines: string) => {
  const data = lines.split("\n");
  const [N, D] = data[0].split(" ").map(str => parseInt(str));
  const points = data
    .slice(1)
    .map(data => data.split(" ").map(str => parseInt(str)));

  let ans = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let sumOfSquare = 0;
      for (let k = 0; k < D; k++) {
        sumOfSquare += Math.pow(points[i][k] - points[j][k], 2);
      }
      const distance = Math.sqrt(sumOfSquare);

      if (Number.isInteger(distance)) {
        ans += 1;
      }
    }
  }

  console.log(ans);
};

main(input);
