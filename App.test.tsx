import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const linkElement2 = screen.getByText(/learn react/i);
  console.log(linkElement2);
  expect(linkElement).toBeInTheDocument();
});
