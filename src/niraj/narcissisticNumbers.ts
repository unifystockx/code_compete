/**
 * Function to check whether a given number is a narcissistic number or not
 * @param {number} numberToCheck - The number to check
 * @return {boolean}
 */

export const isNarcissisticNumber = (numberToCheck: number): boolean => {
  if (numberToCheck < 0) return false;

  // All numbers between 1-10 are narcissistic number
  if (numberToCheck < 10) return true;

  const strNum = String(numberToCheck);

  return (
    numberToCheck ===
    strNum
      .split('')
      .reduce((acc, val) => acc + parseInt(val) ** strNum.length, 0)
  );
};

/**
 * Function to print all the narcissistic numbers between start and end params
 * @param {number} start - Positive number to start the counting
 * @param {number} end - Positive number to end the counting
 * @return {number[]} returns an array of numbers
 */

export const narcissisticNumbersFinder = (
  start: number,
  end: number
): number[] => {
  const result: number[] = [];

  if (!start || !end || start < 0 || end < 0)
    throw new Error('Input range must be positive numbers');

  if (end < start)
    throw new Error('Starting number must be less than ending number');

  for (let i = start; i <= end; i++) {
    if (isNarcissisticNumber(i)) result.push(i);
  }

  return result;
};
