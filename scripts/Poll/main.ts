const main = (input: string) => {
  const lines = input.trim().split("\n")
  const countMap = new Map()
  let maxCount = 0

  lines.slice(1).forEach(S => {
    if (!countMap.has(S)) {
      countMap.set(S, 1);
    } else {
      countMap.set(S, countMap.get(S) + 1)
    }
    maxCount = Math.max(countMap.get(S), maxCount)
  })

  const answer = Array.from(countMap).filter(entry => entry[1] === maxCount).map(entry => entry[0]).sort()

  console.log(answer.join("\n"))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
