const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const P = lines[1].split(" ").map(str => parseInt(str))
  let minNum = P[0]
  let count = 1

  for (let i = 1; i < N; i++) {
    if(minNum > P[i]) {
      minNum = P[i]
      count += 1
    }
  }

  console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
