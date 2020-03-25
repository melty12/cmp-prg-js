const main = (input: string) => {
  const lines = input.trim().split("\n")
  const N = parseInt(lines[0])
  const [p, q] = lines.slice(1).map(line => line.split(" ").map(str => parseInt(str)))
  let [pOrder, qOrder] = [0, 0]
  const sequence = []
  for (let i = 1; i <= N; i++) {
    sequence.push(i)
  }

  const getPermutation = ({result, pre, post, n}: {
    result: number[][], pre: number[], post: number[], n: number
  }) => {
    if (n > 0) {
      post.forEach((_, i) => {
        const rest = [...post];
        const elem = rest.splice(i, 1);
        getPermutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1});
      });
    } else {
      result.push(pre);
    }
    return result;
  }

  const permutation = getPermutation({ result: [], pre: [], post: sequence, n: N })

  for (let i = 0; i < permutation.length; i++) {
    if(JSON.stringify(permutation[i]) === JSON.stringify(p)) {
      pOrder = i + 1
    }
    if(JSON.stringify(permutation[i]) === JSON.stringify(q)) {
      qOrder = i + 1 
    }
  }

  console.log(Math.abs(pOrder - qOrder));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
