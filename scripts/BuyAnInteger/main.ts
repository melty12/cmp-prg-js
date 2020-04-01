const main = (input: string) => {
  const [A, B, X] = input.trim().split(" ").map(str => parseInt(str))
  let answer = 0
  let left = 0
  let right = Math.pow(10, 9) + 1

  while (right - left > 1) {
    let center = Math.round((left + right) / 2)
    let purchasableAmount = A * center + B * String(center).length

    if (purchasableAmount > X){
      right = center
    } else {
      left = center
    }

    answer = center
  }

  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
