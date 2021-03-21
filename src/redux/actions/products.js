import { productsApi } from '../../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const SET_SIZE = 'SET_SIZE';

export const getProducts = (type) => async (dispatch) => {
  const data = await productsApi.getProducts(type);
  dispatch(setProducts(data));
};

export const setSize = (size) => ({
  type: SET_SIZE,
  payload: size,
});

export const setProductId = (id) => ({
  type: SET_PRODUCT_ID,
  payload: id,
});

export const setChosenProduct = (item) => ({
  type: SET_CHOSEN_PRODUCT,
  payload: item,
});

export const setCategoryName = (name) => ({
  type: SET_CATEGORY_NAME,
  payload: name,
});

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
});

export const setCategory = (type) => ({
  type: SET_CATEGORY,
  payload: type,
});
