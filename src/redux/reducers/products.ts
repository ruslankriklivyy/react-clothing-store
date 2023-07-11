import {
  SET_CATEGORY,
  SET_CATEGORY_ID,
  SET_CATEGORY_NAME,
  SET_CHOSEN_PRODUCT,
  SET_IS_FETCHING,
  SET_PRODUCTS,
  SET_PRODUCT_ID,
} from "@/actionsTypes/actionsTypes";
import { IProductsItem } from "@/interfaces/interfaces";
import { ActionTypes } from "@/redux/actions/products";

const initialState = {
  items: [] as Array<IProductsItem>,
  category: "hoodies" as string,
  categoryName: "Худи" as string,
  chosenProduct: null as IProductsItem | null,
  productId: 0 as number,
  categoryId: 0 as number,
  isFetching: false as boolean,
  categoriesNames: [
    "Memes.Jolybell",
    "Шапки",
    "Футболки",
    "Свитшоты",
    "Худи",
    "Рюкзаки",
    "Поло",
    "FQA",
  ],
  categoriesNamesEng: [
    "memes",
    "hats",
    "t-shirts",
    "sweatshirts",
    "hoodies",
    "bags",
    "polo",
    "fqa",
  ],
  promoItems: [
    {
      id: 0,
      title: "Наш бренд дерзок",
      text: "разве способен на такое обычный раб из тенденций толпы?",
    },
    {
      id: 1,
      title: "Детали бренда - наше все",
      text: "связь бренда и покупателя - наша философская позиция",
    },
    {
      id: 2,
      title: "У нас есть только белый и черный. Остальное - оттенки",
      text: "мы плены идеями максимализма",
    },
  ],
};

export type InitialState = typeof initialState;

export const products = (
  state = initialState,
  action: ActionTypes
): InitialState => {
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
