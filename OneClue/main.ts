let input = "1 100";

const main = (lines: string) => {
  const data = lines.split(" ");
  const stoneLength = parseInt(data[0], 10);
  const stoneCoord = parseInt(data[1], 10);
  let stoneCoords = new Set();

  for (let i = 0; i < stoneLength; i++) {
    stoneCoords.add(stoneCoord - i);
    stoneCoords.add(stoneCoord + i);
  }

  let result = [...stoneCoords.values()]
    .map(Number)
    .sort(conmpareFunc)
    .join(" ");

  console.log(result);
};

const conmpareFunc = (a: number, b: number) => {
  return a - b;
};

main(input);
