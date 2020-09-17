import { inputData } from './data';
import {
  findFinalDirectionOfVehicle,
  validMoves
} from './findFinalDirectionOfVehicle';

describe('findFinalDirectionOfVehicle function', () => {
  test('validity 1 for input data', () => {
    expect(findFinalDirectionOfVehicle(inputData, 'NORTH')).toEqual('SOUTH');
  });

  test('validity 2 for expected directions', () => {
    expect(findFinalDirectionOfVehicle(['STRAIGHT'], 'NORTH')).toEqual('NORTH');
  });

  test('validity 3 for expected directions', () => {
    expect(findFinalDirectionOfVehicle(['RIGHT'], 'NORTH')).toEqual('EAST');
  });

  test('validity 4 for expected directions', () => {
    expect(findFinalDirectionOfVehicle(['BACK'], 'NORTH')).toEqual('SOUTH');
  });

  test('validity 5 for expected directions', () => {
    expect(findFinalDirectionOfVehicle(['LEFT'], 'NORTH')).toEqual('WEST');
  });

  test('validity 6 for turnaround move 1', () => {
    expect(
      findFinalDirectionOfVehicle(['RIGHT', 'RIGHT', 'RIGHT', 'RIGHT'], 'NORTH')
    ).toEqual('NORTH');
  });

  test('validity 7 for turnaround move 2', () => {
    expect(findFinalDirectionOfVehicle(['BACK', 'BACK'], 'NORTH')).toEqual(
      'NORTH'
    );
  });

  test('validity 8 for Empty moves', () => {
    expect(findFinalDirectionOfVehicle([], 'NORTH')).toEqual('NORTH');
  });

  test('validity 9 for Invalid moves', () => {
    expect(findFinalDirectionOfVehicle(['S'], 'NORTH')).toEqual(
      'INVALID MOVES'
    );
  });

  test('validity 10 for Invalid moves', () => {
    expect(
      findFinalDirectionOfVehicle([...inputData, 'S', 'LEFT', 'BACK'], 'NORTH')
    ).toEqual('INVALID MOVES');
  });
});

describe('validMoves function ', () => {
  test('valid data', () => {
    expect(validMoves(inputData)).toEqual(true);
  });

  test('valid data', () => {
    expect(validMoves(['LEFT', 'RIGHT', 'STRAIGHT', 'BACK'])).toEqual(true);
  });

  test('invalid data', () => {
    expect(validMoves([...inputData, 'STRAIGHT', 'RIG'])).toEqual(false);
  });

  test('invalid data', () => {
    expect(validMoves([...inputData, '', 'RIGHT'])).toEqual(false);
  });

  test('invalid data', () => {
    expect(validMoves(['STRAIGHT', 'RIG'])).toEqual(false);
  });
});
