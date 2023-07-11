import { combineReducers } from "redux";

import { products } from "@/redux/reducers/products";
import { cart } from "@/redux/reducers/cart";

const rootReducers = combineReducers({
  products,
  cart,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
