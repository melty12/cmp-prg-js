let input = "30 -50";

const main = (lines: string) => {
  const data = lines.split(" ");
  const appleLength = parseInt(data[0], 10);
  const tastePoint = parseInt(data[1], 10);
  let tastePoints: number[] = [];
  let taste;
  let tasteTotalValue = 0;

  for (let i = 1; i <= appleLength; i++) {
    tastePoints.push(Math.abs(i + tastePoint - 1));
    tasteTotalValue += i + tastePoint - 1;
  }

  console.log(tasteTotalValue - Math.min.apply(null, tastePoints));
};

main(input);
