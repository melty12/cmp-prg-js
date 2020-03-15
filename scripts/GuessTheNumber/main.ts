const main = (input: string) => {
  const lines = input.trim().split("\n")
  const [N, M] = lines[0].split(" ").map(str => parseInt(str))
  const checkList: [number, string][] = lines.slice(1).map(line => {
    const [s, c] = line.split(' ');
    return [parseInt(s) - 1, c];
  });
​
  for (let i = 0; i < Math.pow(10, N); i++) {
    const strNum = i.toString();

    if (strNum.length === N && checkList.every(sc => strNum[sc[0]] === sc[1])) {
      console.log(strNum)
      process.exit(0);
    }
  }
  console.log(-1);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
