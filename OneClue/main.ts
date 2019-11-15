let input = "11";

const main = (lines: string) => {
  const data = lines.split(" ");
  const stoneLength = parseInt(data[0], 10);
  const stoneCoord = parseInt(data[1], 10);
  let stoneCoords = [];

  let k = stoneLength; // 石の連続する長さ
  let x = stoneCoord; // 石の置かれている座標

  const min = x - (k - 1); // 最小値
  const max = x + (k - 1); // 最大値

  for (let i = min; i <= max; i++) {
    stoneCoords.push(i);
  }

  console.log(stoneCoord);
};

main(input);
