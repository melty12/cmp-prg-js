const main = (input: string) => {
  const [A, B, X] = input.trim().split(" ").map(str => parseInt(str))
  let answer = 0

  for (let i = 1; i < X; i++) {
    if(A * i + B * String(i).length > X) {
      answer = i - 1
      break
    }
  }
  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
