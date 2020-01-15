import getQuarter from './getQuarter';

describe('getQuarter', () => {
  const scenarios = [
    { day: '2020-01-14', description: 'Q1', expected: 'Q1' },
    { day: '2020-05-05', description: 'Q2', expected: 'Q2' },
    { day: '2020-09-29', description: 'Q3', expected: 'Q3' },
    { day: '2020-12-25', description: 'Q4', expected: 'Q4' }
  ];

  scenarios.forEach(({ day, description, expected }) => {
    test(description, () => {
      const quarter = getQuarter(day);
      expect(quarter.text).toEqual(expected);
      expect(quarter).toMatchSnapshot();
    });
  });
});
