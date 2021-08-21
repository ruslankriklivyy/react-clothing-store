import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Cart from './Cart';

describe('Cart component', () => {
  const initialState = {
    cart: {
      cartItems: {},
      totalPrice: 0,
      totalCount: 0,
      cartIds: [],
      sizeTypes: {},
      visibleCart: false,
    },
  };
  const mockStore = configureStore();
  let store;

  it('Cart component renders', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );
  });
});
