import {
  FinalDirection,
  validDirections,
  isValidDirection,
  isValidMove,
  SAMPLE_VALID_INPUT,
  SAMPLE_UNKNOWN_INPUT,
  SAMPLE_INVALID_UNKNOWN_INPUT
} from './index';
const finalDirection = new FinalDirection();

describe('getFinalDirection function', () => {
  it('should return initial direction', () => {
    expect(finalDirection.getFinalDirectionByValidatedInput([])).toEqual(
      validDirections[validDirections.NORTH]
    );
  });
  it('should return WEST', () => {
    expect(
      finalDirection.getFinalDirectionByValidatedInput(
        SAMPLE_VALID_INPUT,
        validDirections.EAST
      )
    ).toEqual(validDirections[validDirections.WEST]);
  });
  test('sample input and expect result to be SOUTH', () => {
    expect(
      finalDirection.getFinalDirectionByValidatedInput(SAMPLE_VALID_INPUT)
    ).toEqual(validDirections[validDirections.SOUTH]);
  });
});

describe('getFinalDirectionByUnknownInput function', () => {
  test('getFinalDirectionByUnknownInput by providing valid SAMPLE_UNKNOWN_INPUT input  and expect result to be SOUTH', () => {
    expect(
      finalDirection.getFinalDirectionByUnknownInput(SAMPLE_UNKNOWN_INPUT)
    ).toEqual('SOUTH');
  });

  test('getFinalDirectionByUnknownInput by providing invalid SAMPLE_INVALID_UNKNOWN_INPUT input and expect result to throw error', () => {
    const result = () =>
      finalDirection.getFinalDirectionByUnknownInput(
        SAMPLE_INVALID_UNKNOWN_INPUT
      );
    expect(result).toThrow();
  });
  test('getFinalDirectionByUnknownInput by providing correct direction but wrong initial direction and expect result to throw error', () => {
    const result = () =>
      finalDirection.getFinalDirectionByUnknownInput(
        SAMPLE_UNKNOWN_INPUT,
        'NORTHA'
      );
    expect(result).toThrow();
  });
});

describe('boolean functions', () => {
  it('should return true', () => {
    expect(isValidMove('RIGHT')).toEqual(true);
  });
  it('should return false', () => {
    expect(isValidMove('UP')).toEqual(false);
  });
  it('should return true', () => {
    expect(isValidDirection('NORTH')).toEqual(true);
  });
  it('should return true', () => {
    expect(isValidDirection('SOTHAA')).toEqual(false);
  });
});
