import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo List App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Todo List App/i);
  expect(headerElement).toBeInTheDocument();
});
