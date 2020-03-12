const main = (input: string) => {
  const S = input.trim().split("");
  const X = 753;
  let sumArr = [];

  for (let i = 0; i < S.length - 2; i++) {
    sumArr.push(Math.abs(X - parseInt(S[i] + S[i + 1] + S[i + 2])));
  }

  console.log(Math.min(...sumArr))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
