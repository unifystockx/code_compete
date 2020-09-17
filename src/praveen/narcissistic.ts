/**
 * Function to find that the given number is Narcissistic Number or not
 * @param {number} num number to check if it is Narcissistic Number
 * @return {boolean} true or false
 */
const checkIfNarcissisticNumber = (num: number): boolean => {
  if (num < 0 || num === null || num === undefined) {
    // can't use !num, as 0 is Narcissistic
    return false;
  }
  const numberStr = num.toString();
  const numberLength = numberStr.length;
  let sum = 0;
  for (let index = 0; index < numberLength; index++) {
    const digit = parseInt(numberStr.substr(index, 1));
    sum += Math.pow(digit, numberLength);
  }
  return sum === num;
};

/**
 * Function to find all the Narcissistic Numbers in the given range
 * @param {number} startNum starting number in the range
 * @param {number} endNum ending number in the range
 * @return {number[]} A array of Narcissistic Numbers
 */
const getNarcissisticNumbersWithinRange = (
  startNum: number,
  endNum: number
): Array<number> => {
  const narcissisticNumbers: Array<number> = [];
  const startNumWhole = startNum < 0 ? 0 : startNum;
  if (endNum < 0 || startNumWhole < startNum) {
    return narcissisticNumbers;
  }
  for (
    let numberToCheck: number = startNumWhole;
    numberToCheck <= endNum;
    numberToCheck++
  ) {
    if (checkIfNarcissisticNumber(numberToCheck)) {
      narcissisticNumbers.push(numberToCheck);
    }
  }
  return narcissisticNumbers;
};

export { checkIfNarcissisticNumber, getNarcissisticNumbersWithinRange };
