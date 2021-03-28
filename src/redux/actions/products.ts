import { ThunkAction } from 'redux-thunk';
import { productsApi } from '../../api/api';
import { ProductsItem } from '../../types/types';
import { InitialState } from '../reducers/products';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';

type Thunk = ThunkAction<Promise<void>, InitialState, unknown, ActionTypes>;

export const getProducts = (category: string | null): Thunk => async (dispatch) => {
  const data = await productsApi.getProducts(category);
  dispatch(setProducts(data));
};

type SetProductId = {
  type: typeof SET_PRODUCT_ID;
  payload: number;
};

export const setProductId = (id: number): SetProductId => ({
  type: SET_PRODUCT_ID,
  payload: id,
});

type SetChosenProduct = {
  type: typeof SET_CHOSEN_PRODUCT;
  payload: Array<ProductsItem>;
};

export const setChosenProduct = (item: Array<ProductsItem>): SetChosenProduct => ({
  type: SET_CHOSEN_PRODUCT,
  payload: item,
});

type SetCategoryName = {
  type: typeof SET_CATEGORY_NAME;
  payload: string;
};

export const setCategoryName = (name: string): SetCategoryName => ({
  type: SET_CATEGORY_NAME,
  payload: name,
});

type SetProducts = {
  type: typeof SET_PRODUCTS;
  payload: Array<ProductsItem>;
};

export const setProducts = (items: Array<ProductsItem>): SetProducts => ({
  type: SET_PRODUCTS,
  payload: items,
});

type SetCategory = {
  type: typeof SET_CATEGORY;
  payload: string;
};

export const setCategory = (type: string): SetCategory => ({
  type: SET_CATEGORY,
  payload: type,
});

export type ActionTypes =
  | SetCategory
  | SetProducts
  | SetCategoryName
  | SetChosenProduct
  | SetProductId;
