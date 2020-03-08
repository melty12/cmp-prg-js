const main = (input: string) => {
  const [A, B, K] = input.split(" ").map(str => parseInt(str))
  let divisorList = [];

  const calcGcd = (a: number, b: number): number => {
    const r = a % b;
    if(r === 0) {
      return b;
    }
    return calcGcd(b, a % b)
  }

  const compareFunc = (a: number, b: number) => {
    return b - a;
  }

  const gcd = calcGcd(A, B)
  const squareRoot = Math.ceil(Math.sqrt(gcd))

  for (let i = squareRoot; i > 0; i--) {
    if(gcd % i === 0) {
      divisorList.push(i)
      if(i !== gcd / i) {
        divisorList.push(gcd / i)
      }
    }
  }

  divisorList.sort(compareFunc)
  console.log(divisorList[K - 1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
