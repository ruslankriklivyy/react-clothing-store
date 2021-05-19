import {
  ADD_CART_ITEM,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_STORAGE_SIZE,
  SET_CART_ITEM,
  SET_CART_ITEM_ID,
  SET_SIZE,
  SET_STORAGE_SIZE,
  SET_TOTAL_COUNT,
  SET_TOTAL_PRICE,
  SET_VISIBLE_CART,
} from './../../actionsTypes/actionsTypes';
import { ICartItem, IProductsItem, ISizeTypes } from '../../interfaces/interfaces';

type SetCartItem = {
  type: typeof SET_CART_ITEM;
  payload: ICartItem;
};

export const setCartItem = (obj: ICartItem): SetCartItem => ({
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
  payload: ISizeTypes;
};

export const setStorageSize = (obj: ISizeTypes): SetStorageSize => ({
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
  payload: number[];
};

export const setCartItemId = (id: number[]): SetCartItemId => ({
  type: SET_CART_ITEM_ID,
  payload: id,
});

type AddCartItem = {
  type: typeof ADD_CART_ITEM;
  payload: IProductsItem;
};

export const addCartItem = (item: IProductsItem): AddCartItem => ({
  type: ADD_CART_ITEM,
  payload: item,
});

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

type SetVisibleCart = {
  type: typeof SET_VISIBLE_CART;
  payload: boolean;
};

export const setVisibleCart = (visible: boolean): SetVisibleCart => ({
  type: SET_VISIBLE_CART,
  payload: visible,
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
  | SetCartItem
  | SetVisibleCart;
