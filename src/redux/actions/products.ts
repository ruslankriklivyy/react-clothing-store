import { ThunkAction } from "redux-thunk";
import { productsApi } from "@/api/api";
import { IProductsItem } from "@/interfaces/interfaces";
import { InitialState } from "../reducers/products";

import {
  SET_CATEGORY,
  SET_CATEGORY_ID,
  SET_CATEGORY_NAME,
  SET_CHOSEN_PRODUCT,
  SET_IS_FETCHING,
  SET_PRODUCTS,
  SET_PRODUCT_ID,
} from "@/actionsTypes/actionsTypes";

type Thunk = ThunkAction<Promise<void>, InitialState, unknown, ActionTypes>;

export const getAllCloths =
  (category: string | null): Thunk =>
  async (dispatch) => {
    dispatch(setIsFetching(false));
    const data = await productsApi.fetchAllCloths(category);
    const newCloths = data.filter(
      (item: IProductsItem) => item.category === category
    );
    dispatch(setProducts(newCloths));
    dispatch(setIsFetching(true));
  };

type SetIsFetching = {
  type: typeof SET_IS_FETCHING;
  payload: boolean;
};

export const setIsFetching = (isFetching: boolean): SetIsFetching => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
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
  payload: IProductsItem | null;
};

export const setChosenProduct = (
  item: IProductsItem | null
): SetChosenProduct => ({
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
  payload: Array<IProductsItem>;
};

export const setProducts = (items: Array<IProductsItem>): SetProducts => ({
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
  | SetCategoryId
  | SetIsFetching;
