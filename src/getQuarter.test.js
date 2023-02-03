import getQuarter from './getQuarter';

describe('getQuarter', () => {
  const scenarios = [
    { day: '2020-01-14', description: 'Q1', expected: 'Q1' },
    { day: '2020-05-05', description: 'Q2', expected: 'Q2' },
    { day: '2020-09-29', description: 'Q3', expected: 'Q3' },
    { day: '2020-12-25', description: 'Q4', expected: 'Q4' },
    { day: '2023-04-15', description: 'Q2', expected: 'Q2' },
    { day: '2023-07-15', description: 'Q3', expected: 'Q3' },
    { day: '2023-08-15', description: 'Q3', expected: 'Q3' }
  ];

  scenarios.forEach(({ day, description, expected }) => {
    test(description, () => {
      const quarter = getQuarter(day);
      expect(quarter.text).toEqual(expected);
      expect(quarter).toMatchSnapshot();
    });
  });

  describe('Fiscal year', () => {
    const scenarios = [
      {
        day: '2022-10-26',
        description: 'FY2023/Q2',
        expected: { text: 'Q2', year: 2023 }
      },
      {
        day: '2023-02-02',
        description: 'FY2023/Q3',
        expected: { text: 'Q3', year: 2023 }
      }
    ];

    scenarios.forEach(({ day, description, expected }) => {
      test(description, () => {
        const quarter = getQuarter(day);
        expect(quarter.fiscalText).toEqual(expected.text);
        expect(quarter.fiscalYear).toEqual(expected.year);
        expect(quarter).toMatchSnapshot();
      });
    });
  });
});
