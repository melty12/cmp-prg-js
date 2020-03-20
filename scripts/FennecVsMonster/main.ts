const main = (input: string) => {
  const lines = input.trim().split("\n")
  const [N, K] = lines[0].split(" ").map(str => parseInt(str))
  let H = lines[1].split(" ").map(str => parseInt(str))
  const removedMaxNumList = H.sort((a, b) => b - a).slice(K)

  const sum = (arr: number[]) => {
    return arr.reduce((a:number , b: number) => a + b, 0)
  }

  console.log(sum(removedMaxNumList))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
