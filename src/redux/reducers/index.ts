import { combineReducers } from 'redux';

import { products } from './products';
import { cart } from './cart';

const rootReducers = combineReducers({
  products,
  cart,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
