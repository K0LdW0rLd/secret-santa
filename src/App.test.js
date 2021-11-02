import { render, screen } from '@testing-library/react';
import App from './App';
import Users from './Component/Users.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('add users from input box', () => {
  render(<Users />);
  const userInputBox = screen.getByLabelText('add secret users');
  expect(userInputBox).toBeInTheDocument();
});

test('added user appears on screen', () => {
  render(<Users />);
  const user = screen.getByText('kelly');
  expect(user).toBeInTheDocument();
})
