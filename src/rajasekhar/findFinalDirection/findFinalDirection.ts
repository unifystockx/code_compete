/**
 * List of valid directions ['NORTH', 'EAST', 'SOUTH', 'WEST']
 * */
enum DIRECTIONS {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

/**
 * Function to find the final direction of the vehicle
 * Problem Statement: A Vehicle (initially facing towards NORTH) travelled according to the direction moves got from the input.
 * Find the direction in which the vehicle is facing at the end of the journey.
 * Sample Input: ['STRAIGHT', 'RIGHT', 'LEFT', 'BACK', 'RIGHT' , 'STRAIGHT', 'LEFT']
 * Sample Output: SOUTH
 * @param {string[]} moves - list of moves the vehicle shall take
 * @param {string} initialDirection - starting direction of facing for the vehicle
 * @return {string} returns an array of numbers which are narcissistic
 */
const findFinalDirection = (
  moves: string[] = [],
  initialDirection = 'NORTH'
): string => {
  let curDir = DIRECTIONS[initialDirection]; // Storing the index of initial direction
  moves.forEach((move) => {
    ((
      {
        RIGHT: () => {
          curDir = (curDir + 1) % 4;
        },
        LEFT: () => {
          curDir = (curDir + 3) % 4;
        },
        BACK: () => {
          curDir = (curDir + 2) % 4;
        },
        STRAIGHT: () => undefined
      }[move] ||
      (() => {
        throw new Error('Invalid Move'); // Throwing error for invalid move
      })
    )());
  });
  return DIRECTIONS[curDir];
};

export default findFinalDirection;
