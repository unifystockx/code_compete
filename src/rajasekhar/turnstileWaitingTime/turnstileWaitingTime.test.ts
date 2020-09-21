import turnstileWaitingTime from './index';

describe('group people based on their cities - rajasekhar', () => {
  const sampleInput1 = {
    time: [0, 0, 1, 5],
    direction: [0, 1, 1, 0]
  };
  const sampleInput1Output = [2, 0, 1, 5];

  const sampleInput2 = {
    time: [2, 2, 2, 3, 4, 2, 1],
    direction: [1, 0, 1, 1, 0, 0, 0]
  };
  const sampleInput2Output = [5, 2, 6, 7, 4, 3, 1];

  test('is a function', () => {
    expect(typeof turnstileWaitingTime).toEqual('function');
  });

  test('return value is an array', () => {
    const output = turnstileWaitingTime(
      sampleInput1.time,
      <(0 | 1)[]>sampleInput1.direction
    );
    expect(typeof output).toEqual('object');
    expect(output).toHaveProperty('length');
  });

  test('Expect blank output when no students appeared', () => {
    const output = turnstileWaitingTime([], []);
    expect(JSON.stringify(output)).toEqual(JSON.stringify([]));
  });

  test('Expect the immediate time when a single student appeared', () => {
    const time = 5;
    const output = turnstileWaitingTime([time], [1]);
    expect(JSON.stringify(output)).toEqual(JSON.stringify([time]));
  });

  test('Expected output for sampleInput1', () => {
    const output = turnstileWaitingTime(
      sampleInput1.time,
      <(0 | 1)[]>sampleInput1.direction
    );
    expect(JSON.stringify(output)).toEqual(JSON.stringify(sampleInput1Output));
  });

  test('Expected output for sampleInput2', () => {
    const output = turnstileWaitingTime(
      sampleInput2.time,
      <(0 | 1)[]>sampleInput2.direction
    );
    expect(JSON.stringify(output)).toEqual(JSON.stringify(sampleInput2Output));
  });
});
