const main = (input: string) => {
  const lines = input.split("\n");
  const RATE = 380000;
  let answer = 0;
  lines.slice(1).map(line => {
    if(line.slice(-3) === "JPY") {
      answer += Number(line.slice(0, -4));
    } else {
      answer += Number(line.slice(0, -4)) * RATE;
    }
  })
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
