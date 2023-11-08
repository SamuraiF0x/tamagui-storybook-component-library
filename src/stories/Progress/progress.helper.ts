export const volumeLevelMeasures = ["+36", "+24", "+12", "0", "-10", "-21", "-32", "-42", "-53", "-64"];

export const percentageMeasures = Array.from({ length: 100 / 10 + 1 }, (_, index) =>
	(100 - index * 10).toString()
);
