const main = (input: string) => {
  let S = parseInt(input.trim())
  const A = [S];
  let isInCompleted = true;

  while (isInCompleted) {
    if(S % 2 === 0) {
      S = S / 2
    } else {
      S = (S * 3) + 1
    }
    if(A.indexOf(S) >= 0) {
      isInCompleted = false
    }
    A.push(S)
  }

  console.log(A.length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
