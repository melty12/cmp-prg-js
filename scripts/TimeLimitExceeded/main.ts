const main = (input: string) => {
  const lines = input.trim().split("\n")
  const [N, T] = lines[0].split(" ").map(str => parseInt(str));
  const CT = lines.slice(1);
  const CTNumberList: number[][] = [];
  let minCost = 0;
  let answer: number | string;

  CT.forEach(ct => {
    CTNumberList.push(ct.split(" ").map(str => parseInt(str)))
  })

  CTNumberList.forEach(ct => {
    if(T >= ct[1] && (ct[0] < minCost || minCost === 0)) {
      minCost = ct[0]
    }
  })

  answer = minCost === 0 ? "TLE" : minCost
  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
