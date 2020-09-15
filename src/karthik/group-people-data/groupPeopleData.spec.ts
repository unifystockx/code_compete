import { groupPeopleByCity } from './groupPeopleData';
import {
  testData,
  expectedResult,
  partialTestData,
  partialExpectedResult
} from './data';

describe('testing getCityBasedPeopleGroup function', () => {
  it('testing if testData returns the expectedResult', () => {
    const result = groupPeopleByCity(testData);
    expect(result).toEqual(expectedResult);
  });

  it('testing if partialTestData does not return the expectedResult', () => {
    const result = groupPeopleByCity(partialTestData);
    expect(result).not.toEqual(expectedResult);
  });

  it('testing if partialTestData returns the partialExpectedResult', () => {
    const result = groupPeopleByCity(partialTestData);
    expect(result).toEqual(partialExpectedResult);
  });

  it('testing if testData does not return the partialExpectedResult', () => {
    const result = groupPeopleByCity(testData);
    expect(result).not.toEqual(partialExpectedResult);
  });

  it('testing if [] data returns the []', () => {
    const result = groupPeopleByCity([]);
    expect(result).toEqual([]);
  });
});
