const main = (input: string) => {
  const lines = input.trim().split("\n");
  const N = parseInt(lines[0])
  let L = lines[1].split(" ").map(str => parseInt(str));
  const maxLength = Math.max(...L);
  let sum = 0;

  const compareFunc　=　(a: number, b: number) => {
    return a - b;
  }

  L.sort(compareFunc)

  for (let i = 0; i < N - 1; i++) {
    sum += L[i];
  }

  console.log(sum > maxLength ? "Yes" : "No")
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
