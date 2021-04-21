import { ThunkAction } from 'redux-thunk';
import { productsApi } from '../../api/api';
import { ProductsItem } from '../../types/types';
import { InitialState } from '../reducers/products';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const SET_CATEGORY_ID = 'SET_CATEGORY_ID';
const SET_ONE_CLOTH = 'SET_ONE_CLOTH';

type Thunk = ThunkAction<Promise<void>, InitialState, unknown, ActionTypes>;

export const getProducts = (category: string | null): Thunk => async (dispatch) => {
  const data = await productsApi.getProducts(category);
  dispatch(setProducts(data));
};

export const getOneCloth = (id: number): Thunk => async (dispatch) => {
  const cloth = await productsApi.fetchOneCloth(id);
  dispatch(setChosenProduct(cloth));
};

export const getAllCloths = (id: number): Thunk => async (dispatch) => {
  const data = await productsApi.fetchAllCloths(id);
  const newCloths = data.rows.filter((item: any) => item.categoryId === id);
  dispatch(setProducts(newCloths));
};

export const addCategory = (category: string): Thunk => async (dispatch) => {
  const data = await productsApi.createCategory(category);
  console.log(data);
};

export const getCategories = (): Thunk => async (dispatch) => {
  const data = await productsApi.fetchCategory();
  dispatch(setCategories(data));
};

export const createCloth = (cloth: any): Thunk => async (dispatch) => {
  const data = await productsApi.createCloth(cloth);
  return data;
};

type SetOneCloth = {
  type: typeof SET_ONE_CLOTH;
  payload: ProductsItem;
};

export const setOneCloth = (obj: ProductsItem): SetOneCloth => ({
  type: SET_ONE_CLOTH,
  payload: obj,
});

type SetCategories = {
  type: typeof SET_CATEGORIES;
  payload: any;
};

export const setCategories = (categories: any): SetCategories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

type SetCategoryId = {
  type: typeof SET_CATEGORY_ID;
  payload: number;
};

export const setCategoryId = (id: number): SetCategoryId => ({
  type: SET_CATEGORY_ID,
  payload: id,
});

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
  | SetProductId
  | SetCategories
  | SetCategoryId
  | SetOneCloth;
