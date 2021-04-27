import { CartItem, ProductsItem, SizeTypes } from '../../types/types';
import { ActionTypes } from '../actions/cart';

const initialState = {
  cartItems: {} as CartItem,
  totalPrice: 0 as number,
  totalCount: 0 as number,
  cartIds: [] as Array<number>,
  sizeTypes: {} as SizeTypes,
};

export type InitialState = typeof initialState;

const ADD_CART_ITEM = 'ADD_CART_ITEM';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
const SET_CART_ITEM = 'SET_CART_ITEM';
const SET_CART_ITEM_ID = 'SET_CART_ID';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const SET_SIZE = 'SET_SIZE';
const SET_STORAGE_SIZE = 'SET_STORAGE_SIZE';
const REMOVE_STORAGE_SIZE = 'REMOVE_STORAGE_SIZE';

const _get = (obj: any, path: string) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj: CartItem, path: string) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const getTotalPrice = (arr: Array<ProductsItem>) =>
  arr.reduce((sum: number, obj: ProductsItem) => {
    return Number(obj.price) + sum;
  }, 0);

export const cart = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const currentCartItem = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].items, action.payload];

      const newItems = {
        ...state.cartItems,
        [action.payload.id]: {
          items: currentCartItem,
          totalPrice: getTotalPrice(currentCartItem),
          sizeType: state.sizeTypes,
        },
      };

      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const totalCount = getTotalSum(newItems, 'items.length');

      return {
        ...state,
        cartItems: newItems,
        totalPrice,
        totalCount,
        cartIds: [...state.cartIds, action.payload.id],
      };
    }

    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.cartItems[action.payload].items,
        state.cartItems[action.payload].items[0],
      ];

      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, 'items.length');

      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalPrice,
        totalCount,
      };
    }

    case MINUS_CART_ITEM: {
      const oldCartItems = state.cartItems[action.payload].items;
      const newObjItems =
        oldCartItems.length > 1 ? state.cartItems[action.payload].items.slice(1) : oldCartItems;

      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalPrice = getTotalSum(newItems, 'totalPrice');

      const totalCount = getTotalSum(newItems, 'items.length');

      return {
        ...state,
        cartItems: newItems,
        totalPrice,
        totalCount,
      };
    }

    case SET_SIZE:
      const sizeCurrentActives = !state.sizeTypes[action.id] ? [action.size] : [action.size];

      const newSizeItems = {
        ...state.sizeTypes,
        [action.id]: {
          size: sizeCurrentActives,
        },
      };

      return {
        ...state,
        sizeTypes: newSizeItems,
      };

    case REMOVE_STORAGE_SIZE: {
      const newSizes = { ...state.sizeTypes };
      delete newSizes[action.payload];

      return {
        ...state,
        sizeTypes: newSizes,
      };
    }

    case SET_STORAGE_SIZE:
      return {
        ...state,
        sizeTypes: action.payload,
      };

    case REMOVE_CART_ITEM: {
      const newItems = { ...state.cartItems };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      delete newItems[action.payload];

      return {
        ...state,
        cartItems: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    }

    case SET_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };

    case SET_CART_ITEM_ID:
      return {
        ...state,
        cartIds: [...state.cartIds, ...action.payload],
      };

    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};
