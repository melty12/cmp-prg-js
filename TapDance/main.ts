let input = "RDULULDURURLRDULRLR";

const main = lines => {
  const strArr = lines.split("");
  let result = "Yes";

  strArr.forEach((str, index) => {
    index += 1;
    if (index % 2 === 1) {
      if (str === "L") {
        result = "No";
      }
    } else {
      if (str === "R") {
        result = "No";
      }
    }
  });

  console.log(result);
};

main(input);
