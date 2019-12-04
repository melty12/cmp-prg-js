const input = "2 10 20";

const main = (input: string) => {
  let [r, D, x] = input.trim().split(" ").map(str => parseInt(str))
  const OUTPUT_LINE = 10;
  let answer: string = "";
  let answer2: string = "";

  for (let i = 0; i < OUTPUT_LINE; i++) {
    answer = `${answer}${r * x - D}\n`;
    x = r * x - D
  }

  console.log(answer.trim());
}
main(input);