import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { ProductsItem } from '../types/types';

const $host = axios.create({
  baseURL: 'https://607ff3b4a5be5d00176dcb21.mockapi.io/api/',
});

const $host2 = axios.create({
  baseURL: 'https://asos2.p.rapidapi.com/products/v2/list',
  headers: {
    'x-rapidapi-key': '4897b78230mshf659a0b43a2289fp1b04f0jsn2d98e8d03585',
  },
});

const data = $host2.get('/').then(({ data }) => data);
console.log(data);

export const productsApi = {
  fetchAllCloths(category: string | null): Promise<Array<ProductsItem>> {
    return $host.get(`products${category ? `?category=${category}` : ''}`).then(({ data }) => {
      return data;
    });
  },
};

export const userApi = {
  registration(email: string, password: string): Promise<any> {
    return $host
      .post('user/registration', {
        email,
        password,
        role: 'ADMIN',
      })
      .then(({ data }) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        return jwt_decode(data.token);
      });
  },
  login(email: string, password: string): Promise<any> {
    return $host.post('user/login', { email, password }).then(({ data }) => {
      localStorage.setItem('token', JSON.stringify(data.token));
      return jwt_decode(data.token);
    });
  },
  check(): Promise<any> {
    return $host.get('user/auth').then(({ data }) => {
      return data;
    });
  },
};
