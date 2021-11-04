import { render, screen } from '@testing-library/react';
import Users from './Component/Users.js';

test('add users from input box', () => {
  render(<Users />);
  const userInputBox = screen.getByLabelText('add secret users');
  expect(userInputBox).toBeInTheDocument();
});

test('added user appears on screen', () => {
  render(<Users />);
  expect(screen.queryByText('Kelly')).not.toBeNull();
})

test('add multiple users on screen', () => {
  render(<Users />);
  const user2 = screen.queryByText('Miray')

  expect(user2).not.toBeNull();

})