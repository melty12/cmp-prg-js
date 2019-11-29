let input = "4\n1 3 1 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const N = parseInt(data[0]);
  const weights = data[1].split(" ").map(str => parseInt(str));
  let sumOfWeights: number;
  let calculateWeights: number = 0;
  let answer: number | null = null
  let temp: number;

  sumOfWeights = weights.reduce((a, x) => a += x, 0)

  weights.forEach(weight => {
    sumOfWeights -= weight
    calculateWeights += weight

    temp = Math.abs(sumOfWeights - calculateWeights)
    if (answer === null || answer > temp) {
      answer = temp
    }
  });

  console.log(answer)
};

main(input);
