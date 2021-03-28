export type ProductsItem = {
  id: number;
  name: string;
  sizes: Array<string>;
  price: string;
  description: Array<string>;
  category: string;
  delivery_world_price: string;
  delivery_ukraine_price: string;
  images: Array<string>;
};

export type CartItem = {
  [key: number]: {
    items: Array<ProductsItem>;
    totalPrice: 0 | number;
  };
};

export type SizeTypes = {
  [ket: number]: {
    size: Array<string>;
  };
};
