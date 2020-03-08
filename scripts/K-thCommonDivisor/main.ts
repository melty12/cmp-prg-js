const main = (input: string) => {
  const [A, B, K] = input.split(" ").map(str => parseInt(str))
  let divisorList = [];

  for (let i = A; i > 0; i--) {
    if(A % i === 0 && B % i === 0) {
      divisorList.push(i)
    }
  }
  console.log(divisorList[K - 1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
