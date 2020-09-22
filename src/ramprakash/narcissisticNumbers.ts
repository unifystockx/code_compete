export const isNarcissistic = (num: number): boolean => {
  if (num <= 0) {
    return false;
  }

  if(num > 0 && num < 10) {
    return true;
  }

  
  //Find the length of the given number
  let divisor: number = 1, numLength: number = 0;
  while(num / divisor > 1){
    divisor *= 10;
    numLength++;
  };
  
  //check the given number is narcissistic
  let sum: number = 0, temp: number = num;
  while(temp){
    sum += Math.pow(temp % 10, numLength);
    temp = Math.floor(temp / 10);
  };
  return sum === num;
};

export const getNarcissisticNumbers = (start: number, end: number): number[] => {
  const result: number[] = [];

  if (start >= 10 && end > 10 && end > start){
    for (let i = start; i <= end; i++) {
      if (isNarcissistic(i)){
        result.push(i);
      }
    }
  }
  return result;
};