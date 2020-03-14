const main = (input: string) => {
  const [A, B] = input.trim().split(" ").map(str => parseInt(str))
  const taxRateA = 0.08
  const taxRateB = 0.1
  const maxCount = 1010
  let count = 1;
  let answer = -1;
  
  const taxRateCalc = (n: number) => {
    if(Math.floor(n * taxRateA) === A && Math.floor(n * taxRateB) === B) {
      return n
    } else {
      return -1
    }
  }

  while(answer === -1 && count < maxCount) {
    answer = taxRateCalc(count)
    count += 1
  }
  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
