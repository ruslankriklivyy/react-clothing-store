import axios from 'axios';
import { IProductsItem } from '../interfaces/interfaces';

const $host = axios.create({
  baseURL: 'https://607ff3b4a5be5d00176dcb21.mockapi.io/api/',
});

export const productsApi = {
  fetchAllCloths(category: string | null): Promise<Array<IProductsItem>> {
    return $host
      .get(`products${category ? `?category=${category}` : ''}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => alert(err));
  },
};
