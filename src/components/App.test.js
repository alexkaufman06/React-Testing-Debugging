import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('puts the lotion on its skin', () => {
  const test = true;
  expect(test).toBe(true);
});