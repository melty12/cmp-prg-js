function Main(input1, input2)
{
  let result = "-1"
  if (
    input1 >= 1 && input1 <= 9 &&
    input2 >= 1 && input2 <= 9
  )
  {
    result = input1 * input2;
  }

  console.log(result)
}

Main(process.argv[2], process.argv[3]);