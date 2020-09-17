/**
 * Function to check if number is naricissistic or not.
 * @param {number} num - given number to check
 * @return {boolean} true or false
 */
const checkIfNarcissticNumber = (num: number): boolean => {
  if (num < 0) return false;
  const arr = ('' + num).split('');
  const noOfDigits = arr.length;

  let sum = 0;
  for (let i = 0; i < noOfDigits; i++) {
    sum += parseInt(arr[i]) ** noOfDigits;
  }

  if (num === sum) {
    return true;
  } else {
    return false;
  }
};

/**
 * Function to Find all numbers in range if they are Naricissistic in value
 * @param {number} from - starting value of the range
 * @param {number} to - ending value of the range
 * @return {number[]} - Array of Naricissistic Numbers
 */
const getNarcissticNumbersWithinRange = (
  from: number,
  to: number
): Array<number> => {
  const naricissisticNumbers: Array<number> = [];
  for (let checkNum = from; checkNum <= to; checkNum++) {
    const checkIfNaricissistic: boolean = checkIfNarcissticNumber(checkNum);
    if (checkIfNaricissistic) {
      naricissisticNumbers.push(checkNum);
    }
  }

  return naricissisticNumbers;
};

export { checkIfNarcissticNumber, getNarcissticNumbersWithinRange };
