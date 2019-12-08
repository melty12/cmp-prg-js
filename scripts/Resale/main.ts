let input = '3\n10 2 5\n6 3 4';

const main = (input: string) => {
  const lines = input.trim().split("\n").slice(1)
  const V = lines[0].split(" ").map(str => parseInt(str))
  const C = lines[1].split(" ").map(str => parseInt(str))
  let answer = 0;

  for (let i = 0; i < V.length; i++) {
    if (V[i] > C[i]) {
      answer += V[i] - C[i];
    }
  }

  console.log(answer);
}

main(input);