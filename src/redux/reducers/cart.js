const initialState = {
  cartItems: {},
  totalPrice: 0,
  totalCount: 0,
};

const ADD_CART_ITEM = 'ADD_CART_ITEM';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

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
    case ADD_CART_ITEM: {
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
      const totalCount = getTotalSum(newItems, 'items.length');

      return {
        ...state,
        cartItems: newItems,
        totalPrice: totalPrice,
        totalCount,
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

    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};
