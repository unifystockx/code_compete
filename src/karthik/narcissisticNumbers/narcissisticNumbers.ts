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

  if (num == sum) {
    return true;
  } else {
    return false;
  }
};

export { checkIfNarcissticNumber };
