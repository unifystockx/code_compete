import {
  isNarcissisticNumber,
  narcissisticNumbers
} from './narcissisticNumbers';

test('0 is not a narcissistic number', () => {
  expect(isNarcissisticNumber(0)).toBe(false);
});

test('11 is not a narcissistic number', () => {
  expect(isNarcissisticNumber(11)).toBe(false);
});

test('1 is a narcissistic number', () => {
  expect(isNarcissisticNumber(1)).toBe(true);
});

test('153 is a narcissistic number', () => {
  expect(isNarcissisticNumber(153)).toBe(true);
});

describe('Given a negative starting number', () => {
  test('it should return an empty array', () => {
    expect(narcissisticNumbers(-10).length).toBe(0);
  });
});

describe('Given a negative ending number', () => {
  test('it should return an empty array', () => {
    expect(narcissisticNumbers(0, -10).length).toBe(0);
  });
});

describe('Given a negative range', () => {
  test('it should return an empty array', () => {
    expect(narcissisticNumbers(-20, -10).length).toBe(0);
  });
});

describe('When no range given', () => {
  test('it should return an empty array', () => {
    expect(narcissisticNumbers().length).toBe(0);
  });
});

describe('Given positive range and starting number is greater than ending number', () => {
  test('it should return an empty array', () => {
    expect(narcissisticNumbers(20, 1).length).toBe(0);
  });
});

describe('When starting number is 10 and ending number is 10000', () => {
  const narcissisticNumbersList = [153, 370, 371, 407, 1634, 8208, 9474];
  test('it should return an array of numbers [153, 370, 371, 407, 1634, 8208, 9474]', () => {
    expect(narcissisticNumbers(10, 10000).length).toEqual(
      narcissisticNumbersList.length
    );
    expect(narcissisticNumbers(10, 10000)).toEqual(narcissisticNumbersList);
  });
});
