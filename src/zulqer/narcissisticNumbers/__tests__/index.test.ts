import { getNarcissisticNumbersInRange, isNarcissisticNumber } from '..';

describe('find if provided number is Narcissistic using isNarcissisticNumber function ', () => {
  it('153 is NarcissisticNumber ', () => {
    const result = isNarcissisticNumber(153);

    expect(result).toBe(true);
  });

  it('10 is non NarcissisticNumber ', () => {
    expect(isNarcissisticNumber(10)).toBe(false);
  });
  it('negative number -153 is non NarcissisticNumber ', () => {
    expect(isNarcissisticNumber(10)).toBe(false);
  });
});

describe('find narcissistic numbers in provided range using getNarcissisticNumbersInRange function  ', () => {
  it('narcissistic numbers between 10 to 100', () => {
    expect(getNarcissisticNumbersInRange(10, 100)).toEqual([]);
  });

  it('narcissistic numbers between 10 to 100', () => {
    expect(getNarcissisticNumbersInRange(10, 100)).toEqual([]);
  });

  it('narcissistic numbers between negative range  -10 to 0', () => {
    expect(getNarcissisticNumbersInRange(-10, 0)).toEqual([0]);
  });

  it('narcissistic numbers between 10 to 100000 ', () => {
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
