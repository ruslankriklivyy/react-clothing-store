import { ProductsItem } from '../../types/types';
import { ActionTypes } from '../actions/products';

const initialState = {
  items: [] as Array<ProductsItem>,
  category: 'hoodies' as string | null,
  categoryName: '' as string,
  chosenProduct: null as Array<ProductsItem> | null,
  productId: null as number | null,
};

export type InitialState = typeof initialState;

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';

export const products = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };

    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SET_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };

    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };

    case SET_CHOSEN_PRODUCT:
      return {
        ...state,
        chosenProduct: action.payload,
      };

    default:
      return state;
  }
};
