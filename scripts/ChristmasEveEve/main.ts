const main = (input: string) => {
  const lines = input.trim().split("\n");
  const P = lines.slice(1).map(str => parseInt(str))
  const MaxPrice = Math.max(...P)
  let sum = 0;

  P.forEach(p => {
    sum += p
  });

  console.log(sum - (MaxPrice / 2))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
