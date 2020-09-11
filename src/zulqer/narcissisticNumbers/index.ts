function isNarcissisticNumber(num: number): boolean {
  const arrayOfCurrentNumber = String(num).split('');
  const length = arrayOfCurrentNumber.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += Math.pow(parseInt(arrayOfCurrentNumber[i]), length);
  }
  return sum === num;
}

function getNarcissisticNumbersInRange(
  start: number,
  end: number
): Array<number> {
  const narcissisticNumbers: Array<number> = [];
  for (let i: number = start; i <= end; i++) {
    isNarcissisticNumber(i) && narcissisticNumbers.push(i);
  }
  return narcissisticNumbers;
}

export { isNarcissisticNumber, getNarcissisticNumbersInRange };
