const main = (input: string) => {
  const lines = input.trim().split("\n");
  const [N, M] = lines[0].split(" ").map(str => parseInt(str));
  const waCount = new Array(N).fill(0);
  const isAC = new Array(N).fill(false);
  let waSum = 0;
  
  lines.slice(1).forEach((line: string) => {
    const [p, s] = line.split(" ");
    const pi = parseInt(p) - 1;
    if (s === "AC" && !isAC[pi]) {
      isAC[pi] = true;
      waSum += waCount[pi];
    } else {
      waCount[pi]++;
    }
  });
​
  const acSum = isAC.filter(bool => bool).length;
​
  console.log(acSum + " " + waSum);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
