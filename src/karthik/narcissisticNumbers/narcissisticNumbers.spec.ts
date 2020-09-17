import {
  checkIfNarcissticNumber,
  getNarcissticNumbersWithinRange
} from './narcissisticNumbers';

describe('test checkIfNaricissisticNumber function', () => {
  it('test if 0 is not a naricissistic number', () => {
    const result = checkIfNarcissticNumber(0);
    expect(result).toBe(true);
  });

  it('test if 153 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(153);
    expect(result).toBe(true);
  });

  it('test if 1634 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(1634);
    expect(result).toBe(true);
  });

  it('test if -10 is not a naricissistic number', () => {
    const result = checkIfNarcissticNumber(-10);
    expect(result).toBe(false);
  });

  it('test if 370 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(370);
    expect(result).toBe(true);
  });

  it('test if 371 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(371);
    expect(result).toBe(true);
  });

  it('test if 8208 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(371);
    expect(result).toBe(true);
  });

  it('test if 9474 is a naricissistic number', () => {
    const result = checkIfNarcissticNumber(9474);
    expect(result).toBe(true);
  });

  it('test if 9999 is not a naricissistic number', () => {
    const result = checkIfNarcissticNumber(9999);
    expect(result).toBe(false);
  });
});

describe('test getNarcissticNumbersWithinRange function ', () => {
  const validNumbersList = [153, 370, 371, 407, 1634, 8208, 9474];
  it('test if given valid range', () => {
    expect(getNarcissticNumbersWithinRange(10, 10000)).toEqual(
      validNumbersList
    );
  });

  it('test if given invalid range', () => {
    expect(getNarcissticNumbersWithinRange(-10000, -10)).toEqual([]);
  });

  it('test if given invalid range', () => {
    expect(getNarcissticNumbersWithinRange(-10, 10000)).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      ...validNumbersList
    ]);
  });

  it('test if given invalid range', () => {
    expect(getNarcissticNumbersWithinRange(10, 20)).toEqual([]);
  });
});
