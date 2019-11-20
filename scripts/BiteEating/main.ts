let input = "3 -1";

const main = (lines: string) => {
  const data = lines.split(" ");
  const appleLength = parseInt(data[0], 10);
  const tastePoint = parseInt(data[1], 10);
  let tastePoints: number[] = [];
  let result = 0;

  for (let i = 1; i <= appleLength; i++) {
    tastePoints.push(Math.abs(i + tastePoint - 1));
  }

  result = tastePoints
    .filter(n => n != Math.min.apply(null, tastePoints))
    .reduce((prev: number, current: number) => {
      prev + current;
    });

  console.log(result);
};

main(input);
