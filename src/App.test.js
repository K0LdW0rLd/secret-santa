import { render, screen, fireEvent} from '@testing-library/react';
import Users from './Component/Users.js';

test('add users from input box', () => {
  render(<Users />);
  const userInputBox = screen.getByLabelText('add secret users');
  expect(userInputBox).toBeInTheDocument();
});

// test('added user appears on screen', () => {
//   render(<Users />);
//   const element = screen.getByTestId('userList');
//   expect(element).toHaveTextContent('Kelly');
// })

// test('add multiple users on screen', () => {
//   render(<Users />);
//   const user2 = screen.queryByText('Miray')

//   expect(user2).not.toBeNull();

// })

// describe('Add Users to List', () => {
//   it('clicks it', () => {
//      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
//      const user = shallow(<Users />)
//      expect(user.find('.form-login').length).toBe(1);
//         user.find('.form-login').simulate('submit', fakeEvent);
//         expect(user.find(Notification).length).toBe(1);
//  })
// })

it('submit message', () => {
  const onSubmit = jest.fn();
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<Users onSubmit={handleSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
})

test('should show name', async() => {
  render(<Users/>)
  fireEvent.click(screen.getByText('userList'));

  const item = await screen.findAllByAltText(/Item #[0-9]: /);
  expect(items).toHaveLength(1);

})

