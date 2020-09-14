import findFinalDirection from './index';

describe('Find final direction', () => {
  const sampleInput1 = [
    'STRAIGHT',
    'RIGHT',
    'LEFT',
    'BACK',
    'RIGHT',
    'STRAIGHT',
    'LEFT'
  ];

  test('is a function', () => {
    expect(typeof findFinalDirection).toEqual('function');
  });

  test('final value shall be NORTH if no direction moves are passed', () => {
    expect(findFinalDirection([])).toEqual('NORTH');
  });

  test('Expected output - SOUTH for the sample input 1', () => {
    expect(findFinalDirection(sampleInput1)).toEqual('SOUTH');
  });

  test('Expected output - WEST for the sample input 1 when started from EAST', () => {
    expect(findFinalDirection(sampleInput1, 'EAST')).toEqual('WEST');
  });

  test('Expected output - EAST for the sample input 1 with added a left turn', () => {
    expect(findFinalDirection([...sampleInput1, 'LEFT'])).toEqual('EAST');
  });

  test('throw error if the invalid move is passed', () => {
    const invalidMove = () => findFinalDirection([...sampleInput1, 'UP']);
    expect(invalidMove).toThrow();
    expect(invalidMove).toThrowError('Invalid Move');
  });

  test('throw error if the move passed is in invalid case', () => {
    const invalidMove = () => findFinalDirection([...sampleInput1, 'left']);
    expect(invalidMove).toThrow();
    expect(invalidMove).toThrowError('Invalid Move');
  });
});
