const initialState = {
  items: null,
  category: null,
  categoryName: '',
  chosenProduct: null,
  productId: null,
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';
const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';

export const products = (state = initialState, action) => {
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
