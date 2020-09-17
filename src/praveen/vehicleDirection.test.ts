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

describe('testing getFinalDirectionForVehicle function', () => {
  it('testing if testData returns SOUTH direction', () => {
    const result = getFinalDirectionForVehicle(testData);
    expect(result).toEqual('SOUTH');
  });

  it('testing if it returns the NORTH direction with no moves', () => {
    const result = getFinalDirectionForVehicle([]);
    expect(result).toEqual('NORTH');
  });

  it('testing if it returns exception for invalid moves', () => {
    const result = getFinalDirectionForVehicle(['TOP']);
    expect(result).toThrow();
    expect(result).toThrowError('Invalid Move');
  });
});

describe('testing getNextDirectionForMove function', () => {
  it('testing if it returns EAST direction for RIGHT move and current direction as NORTH', () => {
    const result = getNextDirectionForMove('NORTH', 'RIGHT');
    expect(result).toEqual('EAST');
  });

  it('testing if it returns undefined direction for invalid move and current direction as NORTH', () => {
    const result = getNextDirectionForMove('NORTH', 'DOWN');
    expect(result).toEqual(undefined);
  });

  it('testing if it returns exception for invalid direction', () => {
    const result = getNextDirectionForMove('TOP', 'BACK');
    expect(result).toThrow();
    expect(result).toThrowError('Invalid Direction');
  });
});
