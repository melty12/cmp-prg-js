let input = "30 -50";

const main = (lines: string) => {
  const data = lines.split(" ");
  const L = parseInt(data[0], 10);
  const N = parseInt(data[1], 10);
  let tasteTotalValue = 0;
  let minTaste = 0;

  if (L + N - 1 < 0) {
    minTaste = -Math.abs(L + N - 1);
  } else if (N > 0) {
    minTaste = Math.abs(N);
  }

  tasteTotalValue = (L * (2 * N + L - 1)) / 2;

  console.log(tasteTotalValue - minTaste);
};

main(input);
