const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const distance = lines.slice(1).map(line => line.split(" ").map(str => parseInt(str)))
  let count = 0
  let totalDistance = 0

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      totalDistance +=
        Math.sqrt(Math.pow(distance[i][i], 2) + Math.pow(distance[j][i], 2)) + Math.sqrt(Math.pow(distance[j][i], 2) + Math.pow(distance[i][j], 2))
    }
    count += 1
  }
  console.log(totalDistance / count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
