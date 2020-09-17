enum Move {
  STRAIGHT = 'STRAIGHT',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BACK = 'BACK'
}

enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  WEST = 'WEST',
  SOUTH = 'SOUTH'
}

enum PossibleMovesFromNorth {
  STRAIGHT = Direction.NORTH,
  RIGHT = Direction.EAST,
  LEFT = Direction.WEST,
  BACK = Direction.SOUTH
}

enum PossibleMovesFromEast {
  STRAIGHT = Direction.EAST,
  RIGHT = Direction.SOUTH,
  LEFT = Direction.NORTH,
  BACK = Direction.WEST
}

enum PossibleMovesFromSouth {
  STRAIGHT = Direction.SOUTH,
  RIGHT = Direction.WEST,
  LEFT = Direction.EAST,
  BACK = Direction.NORTH
}

enum PossibleMovesFromWest {
  STRAIGHT = Direction.WEST,
  RIGHT = Direction.NORTH,
  LEFT = Direction.SOUTH,
  BACK = Direction.EAST
}

/**
 * Function to return next direction based on the move
 * @param {string} currentDirection
 * @param {string} nextMove
 * @return {Direction} next direction based on the move
 */
const getNextDirectionForMove = (
  currentDirection: string,
  nextMove: string
): Direction => {
  switch (currentDirection) {
    case 'NORTH':
      return PossibleMovesFromNorth[nextMove];
    case 'EAST':
      return PossibleMovesFromEast[nextMove];
    case 'SOUTH':
      return PossibleMovesFromSouth[nextMove];
    case 'WEST':
      return PossibleMovesFromWest[nextMove];
    default:
      throw new Error('Invalid Direction');
  }
};

/**
 * Function to return final direction based on the given moves
 * @param {string[]} moves An array of moves
 * @returns {Direction} final direction
 */
const getFinalDirectionForVehicle = (moves: string[]): Direction => {
  let direction: Direction = Direction.NORTH;

  moves.forEach((move) => {
    if (move in Move) {
      direction = getNextDirectionForMove(direction, move);
    } else {
      throw new Error('Invalid Move');
    }
  });
  return direction;
};

export { getFinalDirectionForVehicle, getNextDirectionForMove };
