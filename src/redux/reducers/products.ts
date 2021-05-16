import {
  SET_CATEGORIES,
  SET_CATEGORY,
  SET_CATEGORY_ID,
  SET_CATEGORY_NAME,
  SET_CHOSEN_PRODUCT,
  SET_IS_FETCHING,
  SET_PRODUCTS,
  SET_PRODUCT_ID,
} from '../../actionsTypes/actionsTypes';
import { ProductsItem } from '../../types/types';
import { ActionTypes } from '../actions/products';

const initialState = {
  items: [] as Array<ProductsItem>,
  category: 'hoodies' as string,
  categoryName: 'Худи' as string,
  chosenProduct: null as ProductsItem | null,
  productId: 0 as number,
  categories: null as any,
  categoryId: 0 as number,
  isFetching: false as boolean,
  categoriesNames: [
    'Memes.Jolybell',
    'Шапки',
    'Футболки',
    'Свитшоты',
    'Худи',
    'Рюкзаки',
    'Поло',
    'FQA',
  ],
  categoriesNamesEng: [
    'memes',
    'hats',
    't-shirts',
    'sweatshirts',
    'hoodies',
    'bags',
    'polo',
    'fqa',
  ],
};

export type InitialState = typeof initialState;

export const products = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.payload,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
