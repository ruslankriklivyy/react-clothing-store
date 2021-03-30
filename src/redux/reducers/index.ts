import { combineReducers } from 'redux';

import { products } from './products';
import { cart } from './cart';
import {auth} from './auth';

const rootReducers = combineReducers({
  products,
  cart,
  auth
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
