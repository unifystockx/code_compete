import {
    getNarcissisticNumbers,
    isNarcissistic
} from './narcissisticNumbers';
  
describe('Check isNarcissistic function', function () {
  it('Check if 153 is NarcissisticNumber ', function () {
    const result = isNarcissistic(153);
    expect(result).toBe(true);
  });
  it('Check if 9474 is NarcissisticNumber ', function () {
    const result = isNarcissistic(9474);
    expect(result).toBe(true);
  });
  it('Check if 133 is not NarcissisticNumber ', function () {
    const result = isNarcissistic(133);
    expect(result).toBe(false);
  });
  it('Check if 8 is not NarcissisticNumber ', function () {
    const result = isNarcissistic(8);
    expect(result).toBe(true);
  });
  it('Check if 10 is not NarcissisticNumber ', function () {
    const result = isNarcissistic(10);
    expect(result).toBe(false);
  });
  it('Check if 0 is not NarcissisticNumber ', function () {
    const result = isNarcissistic(0);
    expect(result).toBe(false);
  });
  it('Check if any negative number for eg. -5 is not NarcissisticNumber ', function () {
    const result = isNarcissistic(-5);
    expect(result).toBe(false);
  });
});
  
describe('testing getNarcissisticNumbers function', function () {
  it('Given a positive range between 10 and 20, it should return an empty array', function () {
    const result = getNarcissisticNumbers(10, 20);
    expect(result).toEqual([]);
  });
  it('Given a negative range, it should return an empty array', function () {
    const result = getNarcissisticNumbers(-10, -20);
    expect(result).toEqual([]);
  });
  it('Given a positive range and starting number is greater than ending number, it should return an empty array', function () {
    const result = getNarcissisticNumbers(200, 150);
    expect(result).toEqual([]);
  });
  it('Given a positive range between 10 and 10000, it should return [153,  370,  371, 407, 1634, 8208, 9474] ', function () {
    const result = getNarcissisticNumbers(10, 10000);
    const expectedResult = [153, 370, 371, 407, 1634, 8208, 9474];
    expect(result).toEqual(expectedResult);
  });
});