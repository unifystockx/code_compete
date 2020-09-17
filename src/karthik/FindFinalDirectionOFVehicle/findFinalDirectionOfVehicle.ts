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
 *     findFinalDirectionOfVehicle(['LEFT,BACK'],'NORTH')
 */
const findFinalDirectionOfVehicle = (
  moves: Array<string>,
  initialDirection: string
): string => {
  if (!moves || moves.length < 1) return initialDirection;
  if (!validMoves(moves)) return 'INVALID MOVES';
  let direction = initialDirection;
  let finalDirection = all_directions[direction];

  moves.forEach((move) => {
    if (move === 'STRAIGHT') {
      finalDirection = (all_directions[direction] + all_moves['STRAIGHT']) % 4;
    } else if (move === 'RIGHT') {
      finalDirection = (all_directions[direction] + all_moves['RIGHT']) % 4;
    } else if (move === 'BACK') {
      finalDirection = (all_directions[direction] + all_moves['BACK']) % 4;
    } else if (move === 'LEFT') {
      finalDirection = (all_directions[direction] + all_moves['LEFT']) % 4;
    }

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
  let validMove: boolean;
  let res: boolean = true;
  moves.forEach((move) => {
    validMove = false;
    for (const am in all_moves) {
      validMove ||= String(am) === String(move);
    }
    res &&= validMove;
  });

  return res;
};

export { findFinalDirectionOfVehicle, validMoves };
