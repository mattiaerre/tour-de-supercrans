import React from 'react';
import Progress from 'react-progressbar';
import './App.css';
import getPercentage from './getPercentage';

function App() {
  const model = {
    percentage: getPercentage({
      end: '2020-03-31',
      start: '2020-01-01',
      today: Date.now()
    }),
    quarter: 'Q1',
    year: '2020',
    yearQuarter: () => `${model.year}/${model.quarter}`
  };

  return (
    <div className="App">
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
