const all_directions = { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 };
const all_moves = { STRAIGHT: 0, RIGHT: 1, BACK: 2, LEFT: 3 };

/**
 * Function to find te final direction of the vehicle
 *
 * @param {Array<string>} moves - Array containing moves of the vehicle
 * @param {string} initialDirection - Initial Direction of the vehicle
 * @return {string} - Direction at the end of the moves
 *
 * @example
 *
 *     findFinalDirectionOfVehicle(['LEFT','BACK'],'NORTH')
 */
const findFinalDirectionOfVehicle = (
  moves: Array<string>,
  initialDirection: string
): string => {
  if (!validMoves(moves)) throw new Error('INVALID MOVES');
  if (!validDirection(initialDirection)) throw new Error('INVALID DIRECTION');
  if (!moves || moves.length < 1) return initialDirection;

  let direction = initialDirection;
  let finalDirection = all_directions[direction];

  moves.forEach((move) => {
    finalDirection = (all_directions[direction] + all_moves[move]) % 4;

    direction = Object.keys(all_directions).find(
      (key) => all_directions[key] === finalDirection
    );
  });

  return direction;
};

/**
 * Function to check if given valid direction moves as input
 *
 * @param {Array<string>} moves - Array containing moves of the vehicle
 * @return {boolean} - true or false
 *
 * @example
 *
 *     validMoves(['STRAIGHT', 'RIGHT', 'LEFT'])
 */
const validMoves = (moves: Array<string>): boolean => {
  return moves.every((move) => all_moves[move] !== undefined);
};

/**
 * Function to check if given valid direction as initial direction
 *
 * @param {string} direction - String containing initial direction
 * @return {boolean} - true or false
 *
 * @example
 *
 *     validDirection('NORTH')
 */
const validDirection = (direction: string): boolean => {
  return all_directions[direction] !== undefined;
  // return [direction].every((dir) => all_directions[dir] !== undefined);
};

export { findFinalDirectionOfVehicle, validMoves, validDirection };
