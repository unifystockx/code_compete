import {
  getFinalDirectionForVehicle,
  getNextDirectionForMove
} from './vehicleDirection';

const testData = [
  'STRAIGHT',
  'RIGHT',
  'LEFT',
  'BACK',
  'RIGHT',
  'STRAIGHT',
  'LEFT'
];

describe('testing getFinalDirectionForVehicle function', function () {
  it('testing if testData returns SOUTH direction', function () {
    const result = getFinalDirectionForVehicle(testData);
    expect(result).toEqual('SOUTH');
  });

  it('testing if it returns the NORTH direction with no moves', function () {
    const result = getFinalDirectionForVehicle([]);
    expect(result).toEqual('NORTH');
  });

  it('testing if it returns exception for invalid moves', function () {
    try {
      getFinalDirectionForVehicle(['TOP']);
    } catch (e) {
      expect(e.message).toBe('Invalid Move');
    }
  });
});

describe('testing getNextDirectionForMove function', function () {
  it('testing if it returns EAST direction for RIGHT move and current direction as NORTH', function () {
    const result = getNextDirectionForMove('NORTH', 'RIGHT');
    expect(result).toEqual('EAST');
  });

  it('testing if it returns undefined direction for invalid move and current direction as NORTH', function () {
    const result = getNextDirectionForMove('NORTH', 'DOWN');
    expect(result).toEqual(undefined);
  });

  it('testing if it returns exception for invalid direction', function () {
    try {
      getNextDirectionForMove('TOP', 'BACK');
    } catch (e) {
      expect(e.message).toBe('Invalid Direction');
    }
  });
});
