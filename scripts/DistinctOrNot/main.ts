const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const A = lines[1].split(" ").map(str => parseInt(str))
  A.sort((a, b) => a - b)

  for (let i = 1; i < N; i++) {
    if(A[i] === A[i - 1]) {
      console.log("NO")
      process.exit(0)
    }
  }

  console.log("YES")  
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
