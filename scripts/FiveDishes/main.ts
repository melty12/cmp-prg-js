const main = (input: string) => {
  const lines = input.split("\n").map(str => parseInt(str));
  let sum = 0;
  let maxTime = 0;
  let w: number[] = [];

  lines.forEach((time) => {
    if (time % 10 !== 0) {
      w.push(10 - time % 10)
    }

    sum += (Math.ceil(time / 10) * 10)
  });

  if (w.length > 0) {
    maxTime = w.reduce((a, b) => Math.max(a, b))
  }

  console.log(sum - maxTime);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
