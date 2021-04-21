import axios from 'axios';
import { ProductsItem } from '../types/types';
import jwt_decode from 'jwt-decode';

// const instance = axios.create({
//   baseURL: 'http://localhost:3000/api/',
// });

const $host = axios.create({
  baseURL: 'https://mockend.com/org/repo/',
});

// const $authHost = axios.create({
//   baseURL: 'http://localhost:5000/api/',
//   headers: {
//     authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || '{}')}`,
//   },
// });

export const productsApi = {
  getProducts(category: string | null): Promise<Array<ProductsItem>> {
    return axios.get(`${category ? `products/category=${category}` : ''}`).then(({ data }) => {
      if (category) {
        return data;
      }
    });
  },
  fetchAllCloths(id: number) {
    return $host.get(`products`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },
  fetchOneCloth(id: number) {
    return $host.get(`products/${id}`).then(({ data }) => {
      // const cloth = [data];
      console.log(data);
      return data;
    });
  },
  createCloth(cloth: any) {
    return $host.post('cloth', cloth).then(({ data }) => {
      return data;
    });
  },
  createCategory(category: string) {
    return $host.post('category', { name: category }).then(({ data }) => {
      return data;
    });
  },
  fetchCategory() {
    return $host.get('category').then(({ data }) => {
      console.log(data);
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
