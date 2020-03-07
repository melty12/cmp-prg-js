const main = (input: string) => {
  const lines = input.split("\n")
  const C = parseInt(lines[0].split(" ")[2]);
  const N = parseInt(lines[0].split(" ")[0]);
  const B = lines[1].split(" ").map(str => parseInt(str));
  let A: number[][] = [];
  let sum = 0;
  let answer = 0;

  for (let i = 2; i <= N + 1; i++) {
    A.push(lines[i].split(" ").map(str => parseInt(str)))
  }

  A.forEach(a => {
    sum = 0;

    a.forEach((number, i) => {
      sum += number * B[i];
    })
    if(sum + C > 0) {
      answer += 1;
    }
  })

  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
