import React from 'react';
import Progress from 'react-progressbar';
import { version } from '../package.json';
import './App.css';
import getPercentage from './getPercentage';
import getQuarter from './getQuarter';

function App() {
  const now = Date.now();
  const quarter = getQuarter(now);
  const model = {
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
