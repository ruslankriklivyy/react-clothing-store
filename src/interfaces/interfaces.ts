export interface IProductsItem {
  id: number;
  name: string;
  sizes: string[];
  price: string;
  description?: string[];
  category: string;
  delivery_world_price: string;
  delivery_ukraine_price: string;
  images?: string[];
  img?: string;
  info?: IInfo[];
}

export interface IInfo {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  clothId: number;
}

export interface ICartItem {
  [key: number]: {
    items: IProductsItem[];
    totalPrice: 0 | number;
  };
}

export interface ISizeTypes {
  [key: number]: {
    size: string[];
  };
}

export interface ICategories {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
