import { narcissisticPrinter, isNarcissistic } from '../index';

describe('Narcissistic checker', () => {
  test('153 is narcissistic', () => {
    expect(isNarcissistic(153)).toBeTruthy();
  });
  test('698 is not narcissistic', () => {
    expect(isNarcissistic(698)).toBeFalsy();
  });
});

describe('Narcissistic printer', () => {
  test('is a function', () => {
    expect(typeof narcissisticPrinter).toEqual('function');
  });

  test('no values between 10 to 100', () => {
    const numbers = narcissisticPrinter(10, 100);
    expect(numbers.length).toEqual(0);
  });

  test('no values for negative range', () => {
    const numbers = narcissisticPrinter(-50, -5);
    expect(numbers.length).toEqual(0);
  });

  test('no values for start number is greater than end number', () => {
    const numbers = narcissisticPrinter(1000, 100);
    expect(numbers.length).toEqual(0);
  });

  test('values getting are narcissistic', () => {
    const numbers = narcissisticPrinter(10, 1000);
    expect(isNarcissistic(numbers[1])).toBeTruthy();
  });

  test('all narcissistic numbers from 10 to 10000', () => {
    const output = [153, 370, 371, 407, 1634, 8208, 9474];
    const numbers = narcissisticPrinter(10, 10000);
    expect(JSON.stringify(numbers)).toEqual(JSON.stringify(output));
  });
});
