let input = "5\n9 5 6 8 4";

const main = (input: string) => {
  const lines = input.split("\n");
  const H = lines[1].split(" ").map(str => parseInt(str));
  let maxH = H[0];
  let answer = 0;

  H.forEach((h, i) => {
    if (i === 0 || (H[i - 1] <= h && H[0] <= h && maxH <= h)) {
      answer += 1;
      maxH = h;
    }
  });

  console.log(answer);
};

main(input);
