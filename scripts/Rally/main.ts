const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const X = lines[1].split(" ").map(str => parseInt(str))
  const maxPoint = Math.max(...X)
  let pointList: number[] = []

  X.forEach((x, i) => {
    for (let i = 1; i <= maxPoint; i++) {
      if(i === N) {
        pointList.push(Math.pow(x - i, 2))
      }
    }
  });

  console.log(pointList)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
