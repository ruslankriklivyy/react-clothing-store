const ADD_CART_ITEM = 'ADD_CART_ITEM';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const setTotalPrice = (price) => ({
  type: ADD_CART_ITEM,
  payload: price,
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});
