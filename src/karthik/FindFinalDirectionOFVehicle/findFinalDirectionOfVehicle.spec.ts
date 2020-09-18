import { inputData } from './data';
import {
  findFinalDirectionOfVehicle,
  validMoves,
  validDirection
} from './findFinalDirectionOfVehicle';

describe('findFinalDirectionOfVehicle function', () => {
  test('Shall return the final direction as SOUTH after using inputData from initial position NORTH', () => {
    expect(findFinalDirectionOfVehicle(inputData, 'NORTH')).toEqual('SOUTH');
  });

  test('Shall return the final direction as NORTH after a move of STRAIGHT from initial position NORTH', () => {
    expect(findFinalDirectionOfVehicle(['STRAIGHT'], 'NORTH')).toEqual('NORTH');
  });

  test('Shall return the final direction as EAST after a move of RIGHT from initial position NORTH', () => {
    expect(findFinalDirectionOfVehicle(['RIGHT'], 'NORTH')).toEqual('EAST');
  });

  test('Shall return the final direction as SOUTH after a move of BACK from initial position NORTH', () => {
    expect(findFinalDirectionOfVehicle(['BACK'], 'NORTH')).toEqual('SOUTH');
  });

  test('Shall return the final direction as WEST after a move of LEFT from initial position NORTH', () => {
    expect(findFinalDirectionOfVehicle(['LEFT'], 'NORTH')).toEqual('WEST');
  });

  test('Shall return the final direction as initial position NORTH with turnaround move', () => {
    expect(
      findFinalDirectionOfVehicle(['RIGHT', 'RIGHT', 'RIGHT', 'RIGHT'], 'NORTH')
    ).toEqual('NORTH');
  });

  test('Shall return the final direction as initial position NORTH with turnaround move', () => {
    expect(findFinalDirectionOfVehicle(['BACK', 'BACK'], 'NORTH')).toEqual(
      'NORTH'
    );
  });

  test('Shall return the final direction as initial position NORTH with an empty move', () => {
    expect(findFinalDirectionOfVehicle([], 'NORTH')).toEqual('NORTH');
  });

  test('Shall throw an error INVALID MOVES upon an invalid move', () => {
    expect(() => findFinalDirectionOfVehicle(['S'], 'NORTH')).toThrow();
    expect(() => findFinalDirectionOfVehicle(['S'], 'NORTH')).toThrowError(
      'INVALID MOVES'
    );
  });

  test('Shall throw an error INVALID DIRECTION upon an invalid initial direction TOP', () => {
    expect(() => findFinalDirectionOfVehicle(inputData, 'TOP')).toThrow();
    expect(() => findFinalDirectionOfVehicle(inputData, 'TOP')).toThrowError(
      'INVALID DIRECTION'
    );
  });

  test('Shall throw an error INVALID DIRECTION upon an invalid initial direction DOWN', () => {
    expect(() => findFinalDirectionOfVehicle(inputData, 'DOWN')).toThrow();
    expect(() => findFinalDirectionOfVehicle(inputData, 'DOWN')).toThrowError(
      'INVALID DIRECTION'
    );
  });

  test('Shall throw an error INVALID MOVES upon (invalid moves & invalid initial direction TOP), validating the first parameter and throwing error', () => {
    expect(() =>
      findFinalDirectionOfVehicle([...inputData, 'S'], 'DOWN')
    ).toThrow();
    expect(() =>
      findFinalDirectionOfVehicle([...inputData, 'S'], 'DOWN')
    ).toThrowError('INVALID MOVES');
  });
});

describe('validMoves function ', () => {
  test('Shall return true on valid moves', () => {
    expect(validMoves(inputData)).toEqual(true);
  });

  test('Shall return true on valid moves', () => {
    expect(validMoves(['LEFT', 'RIGHT', 'STRAIGHT', 'BACK'])).toEqual(true);
  });

  test('Shall return false on invalid moves', () => {
    expect(validMoves([...inputData, 'STRAIGHT', 'RIG'])).toEqual(false);
  });

  test('Shall return false on invalid moves', () => {
    expect(validMoves([...inputData, '', 'RIGHT'])).toEqual(false);
  });

  test('Shall return false on invalid moves', () => {
    expect(validMoves(['STRAIGHT', 'RIG'])).toEqual(false);
  });
});

describe('validDirection function ', () => {
  test('Shall return true on valid direction NORTH', () => {
    expect(validDirection('NORTH')).toEqual(true);
  });

  test('Shall return true on valid direction EAST', () => {
    expect(validDirection('EAST')).toEqual(true);
  });

  test('Shall return true on valid direction SOUTH', () => {
    expect(validDirection('SOUTH')).toEqual(true);
  });

  test('Shall return true on valid direction WEST', () => {
    expect(validDirection('WEST')).toEqual(true);
  });

  test('Shall return false on invalid direction TOP', () => {
    expect(validDirection('TOP')).toEqual(false);
  });

  test('Shall return false on invalid direction DOWN', () => {
    expect(validDirection('DOWN')).toEqual(false);
  });
});
