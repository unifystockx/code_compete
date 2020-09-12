import {
  isNarcissisticNumber,
  narcissisticNumbersFinder
} from './narcissisticNumbers';

describe('Invalid Narcissistic Numbers', () => {
  test('-5 is not a narcissistic number', () => {
    expect(isNarcissisticNumber(-5)).toBe(false);
  });

  test('11 is not a narcissistic number', () => {
    expect(isNarcissisticNumber(11)).toBe(false);
  });
});

describe('Valid Narcissistic Numbers', () => {
  test('0 is a narcissistic number', () => {
    expect(isNarcissisticNumber(0)).toBe(true);
  });

  test('1 is a narcissistic number', () => {
    expect(isNarcissisticNumber(1)).toBe(true);
  });

  test('153 is a narcissistic number', () => {
    expect(isNarcissisticNumber(153)).toBe(true);
  });
});

describe('Given invalid range', () => {
  it('should throw an error when no range given', () => {
    expect(narcissisticNumbersFinder).toThrow();
    expect(narcissisticNumbersFinder).toThrowError(
      'Input range must be positive numbers'
    );
  });

  it('should throw an error when negative range given', () => {
    expect(() => narcissisticNumbersFinder(-10, -10000)).toThrow();
    expect(() => narcissisticNumbersFinder(-10, -10000)).toThrowError(
      'Input range must be positive numbers'
    );
  });

  it('should throw an error when starting number is bigger than ending number', () => {
    expect(() => narcissisticNumbersFinder(10000, 10)).toThrow();
    expect(() => narcissisticNumbersFinder(10000, 10)).toThrowError(
      'Starting number must be less than ending number'
    );
  });
});

describe('Given valid Range: 10-10000', () => {
  const narcissisticNumbersList = [153, 370, 371, 407, 1634, 8208, 9474];

  it('should return an array of narcissistic numbers [153, 370, 371, 407, 1634, 8208, 9474]', () => {
    expect(narcissisticNumbersFinder(10, 10000).length).toEqual(
      narcissisticNumbersList.length
    );
    expect(narcissisticNumbersFinder(10, 10000)).toEqual(
      narcissisticNumbersList
    );
  });
});
