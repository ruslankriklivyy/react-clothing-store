const ADD_CART_ITEM = 'ADD_CART_ITEM';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
const SET_CART_ITEMS = 'SET_CART_ITEMS';
const SET_CART_ITEM = 'SET_CART_ITEM';
const SET_CART_ITEM_ID = 'SET_CART_ID';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const setCartItem = (obj) => ({
  type: SET_CART_ITEM,
  payload: obj,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const setCartItemId = (id) => ({
  type: SET_CART_ITEM_ID,
  payload: id,
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const setCartItems = (item) => ({
  type: SET_CART_ITEMS,
  payload: item,
});

export const setTotalCount = (num) => ({
  type: SET_TOTAL_COUNT,
  payload: num,
});

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
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
