const main = (input: string) => {
  const lines: string[] = input.trim().split("\n");
  const N = parseInt(lines[0]);
  const testimonyList: number[][][] = [];
  let i = 1;
  while (i < lines.length - 1) {
      const A = parseInt(lines[i++]);
      const testimony: number[][] = Array(A).fill(0).map(() =>
          lines[i++].split(' ').map(str => parseInt(str)))
      testimonyList.push(testimony);
  }
​
  let maxHonestNum = 0;
  for (let bit = 0; bit < (1 << N); bit++) {
      const isHonest: number[] = Array(N).fill(0);
      for (let i = 0; i < N; i++) {
          if (bit & (1 << i)) {
              isHonest[i] = 1;
          }
      }
      const isConsistent: boolean = testimonyList.every((testimony, i) =>
          isHonest[i] ? testimony.every(xy => isHonest[xy[0] - 1] === xy[1]) : true
      )
​
      if (isConsistent) {
          const honestNum = isHonest.filter(b => b === 1).length;
          maxHonestNum = Math.max(maxHonestNum, honestNum);
      }
  }
​
  console.log(maxHonestNum);
}
​
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
