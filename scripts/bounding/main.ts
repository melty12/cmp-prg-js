let input = "4 9\n3 3 3 3";

const main = (lines: string) => {
  const data = lines.split("\n");
  const [N, X] = data[0].split(" ").map(str => parseInt(str));
  const points = data[1].split(" ").map(str => parseInt(str));
  let sumOfPoint = 0;
  let answer = 1;

  points.forEach((point, index) => {
    sumOfPoint += point;
    if (sumOfPoint <= X) {
      answer += 1;
    }
  });

  console.log(answer);
};

main(input);
