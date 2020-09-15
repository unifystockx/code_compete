import { checkIfNarcissticNumber } from './narcissisticNumbers';

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
  if (from < 0 || to < 0) return [];
  const naricissisticNumbers: Array<number> = [];
  //   console.log(typeof resultArray);
  for (let checkNum = from; checkNum <= to; checkNum++) {
    const checkIfNaricissistic: boolean = checkIfNarcissticNumber(checkNum);
    if (checkIfNaricissistic) {
      //   console.log(typeof checkNum);
      naricissisticNumbers.push(checkNum);
    }
  }

  return naricissisticNumbers;
};

export { getNarcissticNumbersWithinRange };
