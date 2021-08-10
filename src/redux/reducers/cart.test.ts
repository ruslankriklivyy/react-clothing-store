import { ICartItem, ISizeTypes } from '../../interfaces/interfaces';
import {
  addCartItem,
  minusCartItem,
  plusCartItem,
  removeCartItem,
  setCartItem,
  setSize,
  setStorageSize,
  setTotalPrice,
  setVisibleCart,
} from '../actions/cart';
import { cart } from './cart';

const initialState = {
  cartItems: {} as ICartItem,
  totalPrice: 0 as number,
  totalCount: 0 as number,
  cartIds: [] as number[],
  sizeTypes: {} as ISizeTypes,
  visibleCart: false as boolean,
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
  img: 'test',
};

describe('Cart reducer', () => {
  it('Added item to cart', () => {
    // Test action
    const action = addCartItem(item);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.cartItems.hasOwnProperty('1')).toBeTruthy();
  });

  it('Plus totalPrice', () => {
    // Test action
    const action = addCartItem(item);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.totalPrice).toBe(200);
  });

  it('Plus totalCount', () => {
    // Test action
    const action = addCartItem(item);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.totalCount).toBe(1);
  });

  it('Plus totalPrice for item', () => {
    // Test data
    const initialState = {
      cartItems: {
        1: {
          items: [
            {
              id: 2,
              name: 'test',
              sizes: ['1', '2'],
              price: '200',
              description: ['test'],
              category: 'test',
              delivery_world_price: '100',
              delivery_ukraine_price: '100',
              images: ['test.png'],
            },
          ],
          totalPrice: 200,
        },
      } as ICartItem,
      totalPrice: 200 as number,
      totalCount: 1 as number,
      cartIds: [] as number[],
      sizeTypes: {} as ISizeTypes,
      visibleCart: false as boolean,
    };

    // Test action
    const action = plusCartItem(1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.cartItems[1].totalPrice).toBe(400);
  });

  it('Remove item from cart', () => {
    // Test data
    const initialState = {
      cartItems: {
        1: {
          items: [
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
          ],
          totalPrice: 200,
        },
      } as ICartItem,
      totalPrice: 0 as number,
      totalCount: 0 as number,
      cartIds: [] as number[],
      sizeTypes: {} as ISizeTypes,
      visibleCart: false as boolean,
    };

    // Test action
    const action = removeCartItem(1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.cartItems.hasOwnProperty('1')).toBeFalsy();
  });

  it('Minus totalPrice', () => {
    // Test data
    const initialState = {
      cartItems: {
        1: {
          items: [
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
          ],
          totalPrice: 200,
        },
      } as ICartItem,
      totalPrice: 200 as number,
      totalCount: 0 as number,
      cartIds: [] as number[],
      sizeTypes: {} as ISizeTypes,
      visibleCart: false as boolean,
    };

    // Test action
    const action = removeCartItem(1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.totalPrice).toBe(0);
  });

  it('Minus totalCount', () => {
    // Test data
    const initialState = {
      cartItems: {
        1: {
          items: [
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
          ],
          totalPrice: 200,
        },
      } as ICartItem,
      totalPrice: 200 as number,
      totalCount: 1 as number,
      cartIds: [] as number[],
      sizeTypes: {} as ISizeTypes,
      visibleCart: false as boolean,
    };

    // Test action
    const action = removeCartItem(1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.totalCount).toBe(0);
  });

  it('Minus totalPrice for item', () => {
    // Test data
    const initialState = {
      cartItems: {
        1: {
          items: [
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
            {
              id: 2,
              name: 'test',
              sizes: ['1', '2'],
              price: '200',
              description: ['test'],
              category: 'test',
              delivery_world_price: '100',
              delivery_ukraine_price: '100',
              images: ['test.png'],
            },
          ],
          totalPrice: 400,
        },
      } as ICartItem,
      totalPrice: 200 as number,
      totalCount: 1 as number,
      cartIds: [] as number[],
      sizeTypes: {} as ISizeTypes,
      visibleCart: false as boolean,
    };

    // Test action
    const action = minusCartItem(1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.cartItems[1].totalPrice).toBe(200);
  });

  it('Add size', () => {
    // Test action
    const action = setSize('S', 1);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.sizeTypes.hasOwnProperty('1')).toBeTruthy();
  });

  it('Set totalPrice', () => {
    // Test action
    const action = setTotalPrice(200);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.totalPrice).toBe(200);
  });

  it('Set cartItems', () => {
    // Test action
    const action = setCartItem({
      1: {
        items: [
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
          {
            id: 2,
            name: 'test',
            sizes: ['1', '2'],
            price: '200',
            description: ['test'],
            category: 'test',
            delivery_world_price: '100',
            delivery_ukraine_price: '100',
            images: ['test.png'],
          },
        ],
        totalPrice: 400,
      },
    });
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.cartItems[1].items.length === 2).toBeTruthy();
  });

  it('Set size for localStorage', () => {
    // Test data
    const sizeTypes = { 1: { size: ['X'] } };

    // Test action
    const action = setStorageSize(sizeTypes);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.sizeTypes.hasOwnProperty('1')).toBeTruthy();
  });

  it('Set visible cart', () => {
    // Test action
    const action = setVisibleCart(true);
    const newState = cart(initialState, action);

    // Expectation
    expect(newState.visibleCart).toBeTruthy();
  });
});
