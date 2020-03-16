const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const X = lines[1].split(" ").map(str => parseInt(str))
  console.log(N, X);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
