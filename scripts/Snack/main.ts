const main = (input: string) => {
  const [A, B] = input.trim().split(" ").map(str => parseInt(str))
  let snack = 0
  let count = 1
  let isNotFound = true
  
  while (isNotFound) {
    if(count % A === 0 && count % B === 0) {
      snack = count
      isNotFound = false
    }
    count += 1
  }

  console.log(snack)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
