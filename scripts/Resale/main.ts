let input = '1\n1\n50';

const main = (input: string) => {
  const lines = input.trim().split("\n").slice(1)
  const V = lines[0].split(" ").map(str => parseInt(str))
  const C = lines[1].split(" ").map(str => parseInt(str))
  const N = V.length;
  let sumOfV = V.reduce((a, x) => a += x, 0)
  let sumOfC = C.reduce((a, x) => a += x, 0)
  let X: number[] = [];
  let Y: number[] = [];
  let result: number[] = [];
  let resultMax;
  let answer;

  for (let i = 0; i < N; i++) {
    X.push(V[i])
    Y.push(C[i])
    for (let j = i + 1; j < N; j++) {
      X.push(V[i] + V[j])
      Y.push(C[i] + C[j])
    }
  }
  X.push(sumOfV);
  Y.push(sumOfC);

  for (let i = 0; i < X.length; i++) {
    result.push(X[i] - Y[i])
  }

  resultMax = Math.max.apply(null, result);
  answer = resultMax > 0 ? resultMax : 0

  console.log(answer);
}

main(input);