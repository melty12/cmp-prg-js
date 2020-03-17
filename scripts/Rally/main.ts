const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const X = lines[1].split(" ").map(str => parseInt(str))
  const maxPoint = Math.max(...X)
  let consumptionList = [];

  for (let i = 1; i <= maxPoint; i++) {
    let consumption = 0;

    X.forEach(x => {
      consumption += Math.pow(i - x, 2)
    });

    consumptionList.push(consumption)
  }

  console.log(Math.min(...consumptionList))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
