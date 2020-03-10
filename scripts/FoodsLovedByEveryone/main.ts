const main = (input: string) => {
  const lines = input.trim().split("\n");
  const [N, M] = lines[0].split(' ').map(x => parseInt(x));

  const A = lines.slice(1).flatMap(line => line.split(' ').slice(1)).map((food: string) => parseInt(food) - 1);
  
  const countMap = Array(M).fill(0);
  A.forEach(food => countMap[food]++);
  const answer = countMap.filter(count => count === N).length

  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
