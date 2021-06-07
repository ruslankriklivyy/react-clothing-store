import axios from 'axios';
import jwt_decode from 'jwt-decode';
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
