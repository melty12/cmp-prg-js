let input = "1 100";

const main = (lines: string) => {
  const data = lines.split(" ");
  const stoneLength = parseInt(data[0], 10);
  const stoneCoord = parseInt(data[1], 10);
  let stoneCoords = [stoneCoord];

  for (let i = 1; i < stoneLength; i++) {
    stoneCoords.push(stoneCoord - i);
    stoneCoords.push(stoneCoord + i);
  }

  let result = stoneCoords.sort(conmpareFunc).join(" ");

  console.log(result);
};

const conmpareFunc = (a: number, b: number) => {
  return a - b;
};

main(input);
