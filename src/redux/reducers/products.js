const initialState = {
  items: null,
  category: null,
  categoryName: '',
  choosenProduct: null,
  productId: null,
  sizeType: '',
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOOSEN_PRODUCT = 'SET_CHOOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const SET_SIZE = 'SET_SIZE';

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };

    case SET_SIZE:
      return {
        ...state,
        sizeType: action.payload,
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

    case SET_CHOOSEN_PRODUCT:
      return {
        ...state,
        choosenProduct: action.payload,
      };

    default:
      return state;
  }
};
