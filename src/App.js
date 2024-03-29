import { useEffect } from 'react';
import Progress from 'react-progressbar';
import './App.css';
import getPercentage from './getPercentage';
import getQuarter from './getQuarter';
import initializeReactGA from './initializeReactGA';

const version = '0.5.0';

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  const now = Date.now();
  const quarter = getQuarter(now);
  const model = {
    fiscalYearQuarter: () => `FY${quarter.fiscalYear}/${quarter.fiscalText}`,
    percentage: getPercentage({
      end: quarter.last,
      start: quarter.first,
      today: now
    }),
    year: quarter.year,
    yearPercentage: getPercentage({
      end: `${quarter.year}-12-31`,
      start: `${quarter.year}-01-01`,
      today: now
    }),
    yearQuarter: () => `${quarter.year}/${quarter.text}`
  };

  return (
    <div className="App" data-version={version}>
      <h1>Progress Bar {model.yearQuarter()}</h1>
      <p>
        {model.yearQuarter()} is {model.percentage}% completed
      </p>
      <Progress
        className="Progress"
        color="orange"
        completed={model.percentage}
        height={20}
      />
      <p>
        {model.fiscalYearQuarter()} is {model.percentage}% completed
      </p>
      <Progress
        className="Progress"
        color="orange"
        completed={model.percentage}
        height={15}
      />
      <p>
        {model.year} is {model.yearPercentage}% completed
      </p>
      <Progress
        className="Progress"
        color="#2B60DE"
        completed={model.yearPercentage}
        height={15}
      />
      <footer>v{version}</footer>
    </div>
  );
}

export default App;
