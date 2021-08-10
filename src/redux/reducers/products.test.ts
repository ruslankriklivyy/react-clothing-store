import { IProductsItem } from '../../interfaces/interfaces';
import {
  setCategory,
  setCategoryId,
  setCategoryName,
  setChosenProduct,
  setIsFetching,
  setProductId,
  setProducts,
} from '../actions/products';
import { products } from './products';

const initialState = {
  items: [] as Array<IProductsItem>,
  category: 'hoodies' as string,
  categoryName: 'Худи' as string,
  chosenProduct: null as IProductsItem | null,
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
  promoItems: [
    {
      id: 0,
      title: 'Наш бренд дерзок',
      text: 'разве способен на такое обычный раб из тенденций толпы?',
    },
    {
      id: 1,
      title: 'Детали бренда - наше все',
      text: 'связь бренда и покупателя - наша философская позиция',
    },
    {
      id: 2,
      title: 'У нас есть только белый и черный. Остальное - оттенки',
      text: 'мы плены идеями максимализма',
    },
  ],
};

const item = {
  id: 1,
  name: 'test',
  sizes: ['1', '2'],
  price: '200',
  description: ['test'],
  category: 'test',
  delivery_world_price: '100',
  delivery_ukraine_price: '100',
  images: ['test.png'],
};

describe('Products reducer', () => {
  it('Set products', () => {
    // Test data
    const items = [
      {
        id: 1,
        name: 'test',
        sizes: ['1', '2'],
        price: '200',
        description: ['test'],
        category: 'test',
        delivery_world_price: '100',
        delivery_ukraine_price: '100',
        images: ['test.png'],
      },
    ];

    // Test action
    const action = setProducts(items);
    const newState = products(initialState, action);

    // Expectation
    expect(newState.items.length === 1).toBeTruthy();
  });

  it('Set isFetching', () => {
    // Test action
    const action = setIsFetching(true);
    const newState = products(initialState, action);

    // Expectation
    expect(newState.isFetching).toBeTruthy();
  });

  it('Set category id', () => {
    // Test action
    const action = setCategoryId(1);
    const newState = products(initialState, action);

    // Expectation
    expect(newState.categoryId).toBe(1);
  });

  it('Set category', () => {
    // Test action
    const action = setCategory('polo');
    const newState = products(initialState, action);

    // Expectation
    expect(newState.category).toBe('polo');
  });

  it('Set categoryName', () => {
    // Test action
    const action = setCategoryName('поло');
    const newState = products(initialState, action);

    // Expectation
    expect(newState.categoryName).toBe('поло');
  });

  it('Set product id', () => {
    // Test action
    const action = setProductId(1);
    const newState = products(initialState, action);

    // Expectation
    expect(newState.productId).toBe(1);
  });

  it('Set chosen product', () => {
    // Test action
    const action = setChosenProduct(item);
    const newState = products(initialState, action);

    // Expectation
    const obj = newState.chosenProduct && Object.keys(newState.chosenProduct).length > 0;
    expect(obj).toBeTruthy();
  });
});
