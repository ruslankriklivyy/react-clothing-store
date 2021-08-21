import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import BurgerMenu from './BurgerMenu';

describe('BurgerMenu component', () => {
  const visible = false;
  const setVisible = jest.fn();
  const initialState = { products: {} };
  const mockStore = configureStore();
  let store;

  it('BurgerMenu component renders', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <BurgerMenu show={visible} setVisibleBurgerMenu={setVisible} />
        </Router>
      </Provider>,
    );
  });

  it('BurgerMenu component shows cancel image', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <BurgerMenu show={visible} setVisibleBurgerMenu={setVisible} />
        </Router>
      </Provider>,
    );
    expect(screen.getByAltText('cancel svg')).toBeTruthy();
  });

  it('BurgerMenu component close', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <BurgerMenu show={visible} setVisibleBurgerMenu={setVisible} />
        </Router>
      </Provider>,
    );
    const closeBtn = screen.getByTestId('close-btn');
    userEvent.click(closeBtn);
    expect(screen.getByTestId('burger-menu-wrapper')).toHaveStyle('visibility: hidden');
  });
});
