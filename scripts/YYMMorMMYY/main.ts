const input = "1905";

const main = (input: string) => {
  const YY = parseInt(input.slice(0, 2));
  const MM = parseInt(input.slice(2, 4));
  let answer: string = "NA";

  if (isInMonth(YY) && isInMonth(MM)) {
    answer = "AMBIGUOUS";
  } else if (isInMonth(MM)) {
    answer = "YYMM";
  } else if (isInMonth(YY)) {
    answer = "MMYY";
  }

  console.log(answer);
};

const isInMonth = (num: number) => {
  const min = 1;
  const max = 12;
  return num >= min && num <= max;
};

main(input);
