let input = "5\n5 2 3 4 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const sequence = data[1].split(" ").map(str => parseInt(str, 10));
  let result = "NO";

  if (checkOrder(sequence) === "NO") {
    let _sequence = sequence;

    for (let i = 0; i < sequence.length - 1; i++) {
      const temp = _sequence[i];

      _sequence[i] = _sequence[i + 1];
      _sequence[i + 1] = temp;
      result = checkOrder(_sequence);
    }
  } else {
    result = "YES";
  }

  console.log(result);
};

const checkOrder = (sequence: number[]) => {
  let result: string = "YES";
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] - sequence[i - 1] === 1) {
      result = "YES";
    } else {
      result = "NO";
    }
  }

  return result;
};

main(input);
