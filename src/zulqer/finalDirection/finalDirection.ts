enum validDirections {
  NORTH,
  EAST,
  SOUTH,
  WEST
}
enum validMoves {
  STRAIGHT,
  RIGHT,
  LEFT,
  BACK
}
const MOVE_REWARD = {
  STRAIGHT: 0,
  RIGHT: 1,
  LEFT: -1,
  BACK: 2
};
const numberOfDirection = 4;

const SAMPLE_VALID_INPUT: Array<validMoves> = [
  validMoves.STRAIGHT,
  validMoves.RIGHT,
  validMoves.LEFT,
  validMoves.BACK,
  validMoves.RIGHT,
  validMoves.STRAIGHT,
  validMoves.LEFT
];
const SAMPLE_UNKNOWN_INPUT = [
  'STRAIGHT',
  'RIGHT',
  'LEFT',
  'BACK',
  'RIGHT',
  'STRAIGHT',
  'LEFT'
];
const SAMPLE_INVALID_UNKNOWN_INPUT = [
  'STRAIGHT',
  'RIGHT',
  'LEFT',
  'BACK',
  'RIGHT',
  'STRAIGHT',
  'LEFT',
  'UP'
];
const isValidMove = (move: string): boolean => {
  return Object.keys(validMoves).includes(move);
};
const isValidDirection = (direction: string): boolean => {
  return Object.keys(validDirections).includes(direction);
};
const convertToDirection = (num: number) => {
  if (num < 0) {
    num = num + Math.abs(num) * numberOfDirection;
  }
  return validDirections[num % numberOfDirection];
};
class FinalDirection {
  getFinalDirectionByValidatedInput = (
    moves: Array<validMoves>,
    initialFacing: validDirections = validDirections.NORTH
  ): string => {
    const sumOfRewards = moves
      .map((move) => MOVE_REWARD[validMoves[move]])
      .reduce((sum, currentValue) => sum + currentValue, initialFacing);

    return convertToDirection(sumOfRewards);
  };

  getFinalDirectionByUnknownInput = (
    moves: string[] = [],
    initialFacing = 'NORTH'
  ): string => {
    if (!isValidDirection(initialFacing)) {
      throw new Error(`Invalid Direction ${initialFacing}`);
    }
    const sumOfRewards = moves
      .map((move, index) => {
        if (isValidMove(move)) {
          return MOVE_REWARD[move];
        } else {
          throw new Error(`Invalid move "${move}" received at index ${index}`);
        }
      })
      .reduce(
        (sum, currentValue) => sum + currentValue,
        validDirections[initialFacing]
      );

    return convertToDirection(sumOfRewards);
  };
}

export {
  FinalDirection,
  validMoves,
  validDirections,
  isValidDirection,
  isValidMove,
  SAMPLE_VALID_INPUT,
  SAMPLE_UNKNOWN_INPUT,
  SAMPLE_INVALID_UNKNOWN_INPUT
};
