import getPercentage from './getPercentage';

describe('getPercentage', () => {
  // Q1: start 2020-01-01, end 2020-03-31
  const baseArgs = {
    end: '2020-03-31',
    start: '2020-01-01'
  };

  const scenarios = [
    {
      args: {
        ...baseArgs,
        today: '2020-01-01'
      },
      description: 'beginning',
      expected: 0
    },
    {
      args: {
        ...baseArgs,
        today: '2020-03-31'
      },
      description: 'end',
      expected: 100
    },
    {
      args: {
        ...baseArgs,
        today: '2020-02-14'
      },
      description: 'mid - 1',
      expected: 49
    },
    {
      args: {
        ...baseArgs,
        today: '2020-02-15'
      },
      description: 'mid',
      expected: 50
    },
    {
      args: {
        ...baseArgs,
        today: '2020-02-16'
      },
      description: 'mid + 1',
      expected: 51
    },
    {
      args: {
        ...baseArgs,
        today: '2020-01-10'
      },
      description: 'now',
      expected: 10
    },
    {
      args: {
        ...baseArgs,
        today: '2020-01-14'
      },
      description: '14th',
      expected: 14
    }
  ];

  scenarios.forEach(({ args, description, expected }) => {
    test(description, () => {
      const percentage = getPercentage(args);
      expect(percentage).toBe(expected);
    });
  });
});

test('getPercentage to throw', () => {
  expect(() => {
    getPercentage();
  }).toThrow();
});
