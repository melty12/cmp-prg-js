const main = (input: string) => {
  const lines = input.split("\n").slice(1);
  let K = [];
  let result = 0;

  for (let i = 0; i < lines.length; i++) {
    K.push(lines[i].split(" ").map(str => parseInt(str)))
    K[i].shift();
  }
  
  for (let i = 0; i < K.length; i++) {
    let answer = 0;

    for (let j = 0; j < K[i].length; j++) {
      if(K[i].indexOf(K[i][j]) >= 0) {
        answer += 1;
      }
    }

    if(answer === K.length) {
      result += 1;
    }
  }

  if(K.length === 1) {
    result = K[0].length;
  }

  console.log(result)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
