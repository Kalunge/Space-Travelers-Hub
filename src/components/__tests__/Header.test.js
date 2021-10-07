import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('snapshot test for Header Component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot('Rockets');
  });
});

// describe('simulate user event', () => {
//   test('click', () => {
//     render(<Calculator />);
//     expect(userEvent.click(screen.getByTestId('divide'))).toHaveBeenCalled;
//   });
// });
