const main = (input: string) => {
  const strList = input.split('');
  const atcoderStrList = ['A', 'C', 'G', 'T'];
  let matchedNum = 0;
  let isMatched = false;
  let maxNum = 0

  strList.forEach(str => {
    if (atcoderStrList.indexOf(str) >= 0) {
      isMatched = true;
    } else {
      isMatched = false;
    }

    if (isMatched) {
      matchedNum += 1;
    } else {
      matchedNum = 0;
    }

    if (matchedNum > maxNum) {
      maxNum = matchedNum;
    }
  });

  console.log(maxNum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));