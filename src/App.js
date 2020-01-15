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
    yearQuarter: () => `${quarter.year}/${quarter.text}`
  };

  return (
    <div className="App" data-version={version}>
      <h1 className="App-header">Progress Bar {model.yearQuarter()}</h1>
      <p>
        {model.yearQuarter()} is {model.percentage}% completed
      </p>
      <Progress
        className="Progress"
        color="orange"
        completed={model.percentage}
        height={20}
      />
    </div>
  );
}

export default App;
