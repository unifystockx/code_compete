import { getPeopleByCity, getPeopleByGender } from '../index';
import { data, expectedResultForCity, expectedResultForGender } from './data';
describe('group by city function', () => {
  it('should return expected result grouped by city', () => {
    const result = getPeopleByCity(data);
    expect(result).toEqual(expectedResultForCity);
  });

  it('should return empty array ', () => {
    const result = getPeopleByCity([]);
    expect(result).toEqual([]);
  });
});

describe('group by gender function', function () {
  it('should return expected result grouped by gender', () => {
    const result = getPeopleByGender(data);
    expect(result).toEqual(expectedResultForGender);
  });
  it('should return empty array', () => {
    const result = getPeopleByCity([]);
    expect(result).toEqual([]);
  });
});
