const isNarcissisticNumber = (num: number): boolean => {
  const arrayOfCurrentNumber = String(num).split('');
  let sum = 0;
  for (let i = 0; i < arrayOfCurrentNumber.length; i++) {
    sum += Math.pow(
      parseInt(arrayOfCurrentNumber[i]),
      arrayOfCurrentNumber.length
    );
  }
  return sum === num;
};

const getNarcissisticNumbersInRange = (
  start: number,
  end: number
): Array<number> => {
  const narcissisticNumbers: Array<number> = [];
  for (let i: number = start; i <= end; i++) {
    isNarcissisticNumber(i) && narcissisticNumbers.push(i);
  }
  return narcissisticNumbers;
};

export { isNarcissisticNumber, getNarcissisticNumbersInRange };
