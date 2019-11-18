let input = "11";

const main = (lines: string) => {
  const data: number = parseInt(lines, 10);
  let digits;
  let result = 0;

  for (let i = 1; i <= data; i++) {
    digits = String(i).length;
    if (digits % 2 === 1) {
      result += 1;
    }
  }

  console.log(String(result));
};

main(input);
