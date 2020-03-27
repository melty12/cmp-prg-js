const main = (input: string) => {
  const [A, B] = input.trim().split(" ").map(str => parseInt(str))
  const getGcd = (a: number, b: number): number => {
    if(b === 0) {
      return a
    }
    return getGcd(b, a % b)
  }

  const answer = A * B / getGcd(A, B)

  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
