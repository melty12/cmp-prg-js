const main = (input: string) => {
  const lines = input.trim().split("\n")
  const [T, A] = lines[1].split(" ").map(str => parseInt(str));
  const H = lines[2].split(" ").map(str => parseInt(str))
  let points:number[] = [];
  const index = 0.006

  H.forEach(h => {
    points.push(Math.abs(A - (T - h * index)))
  })
  console.log(points.indexOf(Math.min(...points)) + 1);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
