import { ProductsItem } from '../../types/types';

const ADD_CART_ITEM = 'ADD_CART_ITEM';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
const SET_CART_ITEM = 'SET_CART_ITEM';
const SET_CART_ITEM_ID = 'SET_CART_ID';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const SET_SIZE = 'SET_SIZE';
const SET_STORAGE_SIZE = 'SET_STORAGE_SIZE';
const REMOVE_STORAGE_SIZE = 'REMOVE_STORAGE_SIZE';

type SetCartItem = {
  type: typeof SET_CART_ITEM;
  payload: ProductsItem;
};

export const setCartItem = (obj: ProductsItem): SetCartItem => ({
  type: SET_CART_ITEM,
  payload: obj,
});

type RemoveSize = {
  type: typeof REMOVE_STORAGE_SIZE;
  payload: number;
};

export const removeSize = (id: number): RemoveSize => ({
  type: REMOVE_STORAGE_SIZE,
  payload: id,
});

type SetStorageSize = {
  type: typeof SET_STORAGE_SIZE;
  payload: any;
};

export const setStorageSize = (obj: any): SetStorageSize => ({
  type: SET_STORAGE_SIZE,
  payload: obj,
});

type SetSize = {
  type: typeof SET_SIZE;
  size: string;
  id: number;
};

export const setSize = (size: string, id: number): SetSize => ({
  type: SET_SIZE,
  size,
  id,
});

type RemoveCartItem = {
  type: typeof REMOVE_CART_ITEM;
  payload: number;
};

export const removeCartItem = (id: number): RemoveCartItem => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

type SetCartItemId = {
  type: typeof SET_CART_ITEM_ID;
  payload: Array<number>;
};

export const setCartItemId = (id: Array<number>): SetCartItemId => ({
  type: SET_CART_ITEM_ID,
  payload: id,
});

type AddCartItem = {
  type: typeof ADD_CART_ITEM;
  payload: ProductsItem;
};

export const addCartItem = (item: ProductsItem): AddCartItem => ({
  type: ADD_CART_ITEM,
  payload: item,
});

// type SetCartItems = {
//   type: typeof SET_CART_ITEMS;
//   payload: ProductsItem;
// };

// export const setCartItems = (item: ProductsItem): SetCartItems => ({
//   type: SET_CART_ITEMS,
//   payload: item,
// });

type SetTotalCount = {
  type: typeof SET_TOTAL_COUNT;
  payload: number;
};

export const setTotalCount = (num: number): SetTotalCount => ({
  type: SET_TOTAL_COUNT,
  payload: num,
});

type SetTotalPrice = {
  type: typeof SET_TOTAL_PRICE;
  payload: number;
};

export const setTotalPrice = (price: number): SetTotalPrice => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});

type PlusCartItem = {
  type: typeof PLUS_CART_ITEM;
  payload: number;
};

export const plusCartItem = (id: number): PlusCartItem => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

type MinusCartItem = {
  type: typeof MINUS_CART_ITEM;
  payload: number;
};

export const minusCartItem = (id: number): MinusCartItem => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export type ActionTypes =
  | MinusCartItem
  | PlusCartItem
  | SetTotalPrice
  | SetTotalCount
  | AddCartItem
  | SetCartItemId
  | RemoveCartItem
  | SetSize
  | SetStorageSize
  | RemoveSize
  | SetCartItem;
