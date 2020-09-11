import { getNarcissisticNumbersInRange, isNarcissisticNumber } from '..';

describe('find if provided number is Narcissistic using isNarcissisticNumber function ', function () {
  it('153 is NarcissisticNumber ', function () {
    const result = isNarcissisticNumber(153);
    expect(result).toBe(true);
  });

  it('10 is non NarcissisticNumber ', function () {
    expect(isNarcissisticNumber(10)).toBe(false);
  });
});

describe('find narcissistic numbers in provided range using getNarcissisticNumbersInRange function  ', function () {
  it('narcissistic numbers between 10 to 100', function () {
    expect(getNarcissisticNumbersInRange(10, 100)).toEqual([]);
  });
  it('narcissistic numbers between 10 to 100000 ', function () {
    expect(getNarcissisticNumbersInRange(10, 10000)).toEqual([
      153,
      370,
      371,
      407,
      1634,
      8208,
      9474
    ]);
  });
});
