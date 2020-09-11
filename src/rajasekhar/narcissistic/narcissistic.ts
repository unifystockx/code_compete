/**
 * Function to check whether the number given is narcissistic or not
 * @param {number} num - integer to check for narcissistic
 * @return {boolean} returns whether narcissistic or not as boolean
 */
export const isNarcissistic = (num: number): boolean => {
  if (num < 0) return false;
  const str: string = num.toString();
  const res: number = str
    .split('')
    .reduce((acc, each) => acc + Math.pow(+each, str.length), 0);
  return num === res;
};

/**
 * Function to print Narcissistic Numbers for the given range
 * Narcissistic Number : An n-digit number that is the sum of the nth powers of its digits is called an n-narcissistic number.
 * It is also sometimes known as an Armstrong number
 * Example:
 * 	153 = (1*1*1)+(5*5*5)+(3*3*3)
 * 	1634 = (1*1*1*1)+(6*6*6*6)+(3*3*3*3)+(4*4*4*4)
 * Problem Statement: Find all the Narcissistic Numbers between 10 to 10000
 * @param {number} start - starting number of range
 * @param {number} end - ending number of range
 * @return {number[]} returns an array of numbers which are narcissistic
 */
export const narcissisticPrinter = (start = 10, end = 10000): Array<number> => {
  if (start < 0) start = 0;
  const arr: Array<number> = [];
  for (let i: number = start; i <= end; i++) {
    isNarcissistic(i) && arr.push(i);
  }
  return arr;
};
