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

describe('getFinalDirectionForVehicle function', () => {
  it('whether the function returns SOUTH direction when testData is provided', () => {
    const result = getFinalDirectionForVehicle(testData);
    expect(result).toEqual('SOUTH');
  });

  it('whether the function returns NORTH direction when no move is provided', () => {
    const result = getFinalDirectionForVehicle([]);
    expect(result).toEqual('NORTH');
  });

  it('whether the function throws exception when invalid move is provided', () => {
    expect(() => getFinalDirectionForVehicle(['TOP'])).toThrow();
    expect(() => getFinalDirectionForVehicle(['TOP'])).toThrowError(
      'Invalid Move'
    );
  });
});

describe('getNextDirectionForMove function', () => {
  it('whether the function returns EAST direction for RIGHT move and current direction as NORTH', () => {
    const result = getNextDirectionForMove('NORTH', 'RIGHT');
    expect(result).toEqual('EAST');
  });

  it('whether the function returns undefined direction for invalid move and current direction as NORTH', () => {
    const result = getNextDirectionForMove('NORTH', 'DOWN');
    expect(result).toEqual(undefined);
  });

  it('whether the function throws exception for invalid direction', () => {
    expect(() => getNextDirectionForMove('TOP', 'BACK')).toThrow();
    expect(() => getNextDirectionForMove('TOP', 'BACK')).toThrowError(
      'Invalid Direction'
    );
  });
});
