import {
  getNarcissisticNumbersWithinRange,
  checkIfNarcissisticNumber
} from './narcissistic';

describe('testing checkIfNarcissisticNumber function', () => {
  it('testing if 153 is NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(153);
    expect(result).toBe(true);
  });

  it('testing if 10 is not NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(10);
    expect(result).toBe(false);
  });

  it('testing if null is not NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(null);
    expect(result).toBe(false);
  });

  it('testing if undefined is not NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(undefined);
    expect(result).toBe(false);
  });

  it('testing if 0 is NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(0);
    expect(result).toBe(true);
  });

  it('testing if any negative number for eg. -5 is not NarcissisticNumber', () => {
    const result = checkIfNarcissisticNumber(-5);
    expect(result).toBe(false);
  });
});

describe('testing getNarcissisticNumbersWithinRange function', () => {
  it('testing if there is not narcissistic numbers between 10 and 20', () => {
    const result = getNarcissisticNumbersWithinRange(10, 20);
    expect(result).toEqual([]);
  });

  it('testing if there is not narcissistic numbers between -10 and -20', () => {
    const result = getNarcissisticNumbersWithinRange(-10, -20);
    expect(result).toEqual([]);
  });

  it('testing if there is not narcissistic numbers between 200 and 150', () => {
    const result = getNarcissisticNumbersWithinRange(200, 150);
    expect(result).toEqual([]);
  });

  it('testing if there are 7 narcissistic numbers [153,  370,  371, 407, 1634, 8208, 9474] between 10 and 10000', () => {
    const result = getNarcissisticNumbersWithinRange(10, 10000);
    const desiredResult = [153, 370, 371, 407, 1634, 8208, 9474];
    expect(result).toEqual(desiredResult);
  });

  it('testing if there are 6 narcissistic numbers [0, 1,  2, 3, 4, 5] between -100 and 5', () => {
    const result = getNarcissisticNumbersWithinRange(-100, 5);
    const desiredResult = [0, 1, 2, 3, 4, 5];
    expect(result).toEqual(desiredResult);
  });
});
