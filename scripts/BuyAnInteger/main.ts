const main = (input: string) => {
  const [A, B, X] = input.trim().split(" ").map(str => parseInt(str))
  let answer = 0
  let leftNode = 0
  let rightNode = Math.pow(10, 9) + 1
  let count = 1

  while (rightNode - leftNode > 1) {
    let center = Math.round((leftNode + rightNode) / 2)
    let purchasableAmount = A * count + B * String(count).length

    if(center === X) {
      answer = center
      break
    } else if (center < X){
      leftNode = center + 1
    } else {
      rightNode = center - 1
    }

    answer = center
    count += 1
  }

  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
