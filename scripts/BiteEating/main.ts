let input = "3 -1";

const main = (lines: string) => {
  const data = lines.split(" ");
  const appleLength = parseInt(data[0], 10);
  const tastePoint = parseInt(data[1], 10);
  let tastePoints: number[] = [];
  let resultArr = [];
  let sum = 0;

  for (let i = 1; i <= appleLength; i++) {
    tastePoints.push(Math.abs(i + tastePoint - 1));
  }

  resultArr = tastePoints.filter(n => n != Math.min.apply(null, tastePoints));

  for (let i = 0; i < resultArr.length; i++) {
    sum += resultArr[i];
  }
  console.log(sum);
};

main(input);
