const initialState = {
  cartItems: {},
  totalPrice: 0,
};

const ADD_CART_ITEM = 'ADD_CART_ITEM';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const getTotalPrice = (arr) =>
  arr.reduce((sum, obj) => {
    return Number(obj.price) + sum;
  }, 0);

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const currentCartItem = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].items, action.payload];

      const newItems = {
        ...state.cartItems,
        [action.payload.id]: {
          items: currentCartItem,
          totalPrice: getTotalPrice(currentCartItem),
        },
      };

      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalPrice: totalPrice,
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
