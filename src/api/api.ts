import axios from 'axios';
import { ProductsItem } from '../types/types';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const productsApi = {
  getProducts(category: string | null): Promise<Array<ProductsItem>> {
    return instance.get(`${category ? `products?category=${category}` : ''}`).then(({ data }) => {
      if (category) {
        return data;
      }
    });
  },
};
