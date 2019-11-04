function Main(input)
{
	input = parseInt(input);
	let canBeCaluculated = "No";
	let calucResultNumbers = new Set();

	for (i = 1; i <= 9; i++)
	{
		for (j = 1; j <= 9; j++)
		{
			calucResultNumbers.add(i*j)
		}
	}

	if (calucResultNumbers.has(input))
	{
		canBeCaluculated = "Yes";
	}

	console.log(canBeCaluculated)
}

Main(process.argv[2]);