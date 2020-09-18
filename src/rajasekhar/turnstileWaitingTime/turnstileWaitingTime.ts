/**
 * Function to find the best fit student to pass through the gate according to directions and previous turnstile direction
 * Sample Input:
 * students: [0,1,2]
 * direction: [0,1,1,0]
 * prevDir: 1
 * Sample Output: 1
 * @param {number[]} students - array of student indices appearing for passing
 * @param {(0 | 1)[]} direction - array of direction for each student
 * @param {0 | 1} prevDir - previous turnstile direction happened
 * @return {number} returns student index who is best fit for passing at the moment
 */
const findBestFit = (
  students,
  directions: number[] = [],
  prevDir: 0 | 1 = 1
) => {
  if (!students || !students.length || !directions || !directions.length) {
    return null;
  }

  // If student exist with same direction as previous event, first among those are valid else first student from the input.
  return students.find((stud) => directions[stud] === prevDir) || students[0];
};

/**
 * Function to find the waiting time for each student to go through the turnstile gate.
 * Assignment: #24
 * Problem Statement: For each person, find the time when they will pass through the turnstile..
 * Sample Input:
 * time: [0,0,1,5]
 * direction: [0,1,1,0]
 * Sample Output: [2,0,1,5]
 * @param {number[]} time - time array
 * @param {(0 | 1)[]} direction - time array
 * @return {number[]} returns an array of waiting times for each student
 */
const turnstileWaitingTime = (
  time: number[] = [],
  direction: (0 | 1)[] = []
): number[] => {
  if (!time.length) return [];
  const output = new Array(time.length).fill('');

  // Framing a timeline array at each second with list of students at that second.
  const timelineArr = new Array(Math.max(...time) + 1).fill('').map(() => []);
  time.forEach((curTime, studIndex) => {
    timelineArr[curTime].push(studIndex);
  });

  // Iterating over timeline, finding the best fit student for that second and moving others to the next second
  let prevDir;
  let clock = 0;
  while (clock < timelineArr.length) {
    const curStuds = timelineArr[clock];
    if (!curStuds || !curStuds.length) {
      clock++;
      continue;
    }
    if (curStuds.length === 1) {
      output[curStuds[0]] = clock;
      prevDir = direction[curStuds[0]];
      clock++;
      continue;
    }
    const bestFitStud = findBestFit(curStuds, direction, prevDir);
    if (bestFitStud === undefined) {
      clock++;
      continue;
    }
    output[bestFitStud] = clock;
    prevDir = direction[bestFitStud];

    const remaining = curStuds.filter((stud) => stud !== bestFitStud);
    if (remaining.length > 0) {
      if (timelineArr[clock + 1]) {
        timelineArr[clock + 1] = [...remaining, ...timelineArr[clock + 1]];
      } else {
        timelineArr.push([...remaining]);
      }
    }
    timelineArr[clock] = [bestFitStud];

    clock++;
  }

  return output;
};

export default turnstileWaitingTime;
