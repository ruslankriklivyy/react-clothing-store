const ADD_CART_ITEM = 'ADD_CART_ITEM';

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const setTotalPrice = (price) => ({
  type: ADD_CART_ITEM,
  payload: price,
});
