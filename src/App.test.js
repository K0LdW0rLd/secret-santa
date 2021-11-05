import {render, screen, fireEvent, getByLabelText} from '@testing-library/react';
import Users from './Component/Users.js';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

it('submit message', async () => {
  const name = "user";
  const component = await render(<Users />);
  const input = getByLabelText(component, 'add secret users');
  input.value = name;

  getByText(component,  'Submit').click();

  await waitFor(() => 
    expect(queryByTextId(component, 'userList').toBeTruthy()),
  );

  // const onSubmit = jest.fn();
  // const handleSubmit = jest.fn();
  // const { getByTestId } = render(<Users onSubmit={handleSubmit} />);
  // fireEvent.submit(getByTestId("form"));
  // const item = await screen.findAllByAltText(/kelly/);
  // expect(item).not.toBeNull();
  // //expect(onSubmit).toHaveBeenCalled();
})


