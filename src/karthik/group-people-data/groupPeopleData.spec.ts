import { groupPeopleByCity } from './groupPeopleData';
import {
  testData,
  expectedResult,
  partialTestData,
  partialExpectedResult
} from './data';

describe('getCityBasedPeopleGroup function', () => {
  test('testing if testData returns the expectedResult', () => {
    const result = groupPeopleByCity(testData);
    expect(result).toEqual(expectedResult);
  });

  test('if partialTestData returns the partialExpectedResult', () => {
    const result = groupPeopleByCity(partialTestData);
    expect(result).toEqual(partialExpectedResult);
  });

  test('if [] data returns the []', () => {
    const result = groupPeopleByCity([]);
    expect(result).toEqual([]);
  });
});
