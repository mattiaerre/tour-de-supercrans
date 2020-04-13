import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Progress Bar', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Progress Bar/i);
  expect(heading).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
