let input = "4\n1 3 1 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const N = parseInt(data[0]);
  const weights = data[1].split(" ").map(str => parseInt(str));
  let minSum, maxSum;
  let absArr: number[] = [];


  for (let i = 1; i < N; i++) {
    minSum = weights.slice(0, i).reduce((a, x) => a+=x, 0)
    maxSum = weights.slice(i, N).reduce((a, x) => a+=x, 0)

    absArr.push(Math.abs(minSum - maxSum))
  }

  absArr.reduce((a, x) => a+=x, 0)

  console.log(Math.min.apply(null, absArr))
};

main(input);
