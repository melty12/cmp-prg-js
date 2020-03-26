const main = (input: string) => {
  const N = parseInt(input.trim())
  let isNotFound = true
  let primeNumber = N

  const getPrimeNumber = (n: number) => {
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let count = 0
  while(isNotFound) {
    if(getPrimeNumber(N + count)) {
      primeNumber = N + count
      isNotFound = false
    }
    count += 1
  }
  console.log(primeNumber)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
