let input = "5\n5 2 3 4 1";

const main = (lines: string) => {
  const data = lines.split("\n");
  const sequence = data[1].split(" ").map(str => parseInt(str, 10));
  let result = "NO";

  if (checkOrder(sequence)) result = "YES";

  let _sequence;

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 1; j < sequence.length; j++) {
      _sequence = sequence.slice();
      const temp = _sequence[i];
      _sequence[i] = _sequence[j];
      _sequence[j] = temp;

      if (checkOrder(_sequence)) {
        result = "YES";
        break;
      }
    }
  }

  console.log(result);
};

const checkOrder = (sequence: number[]) => {
  let temp = sequence.slice();
  temp.sort((a, b) => (a < b ? -1 : 1));

  temp.forEach((value, index) => {
    if (value !== sequence[index]) return false;
  });

  return true;
};

main(input);
