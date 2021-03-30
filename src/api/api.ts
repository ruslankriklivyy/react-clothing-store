import axios from 'axios';
import { ProductsItem } from '../types/types';
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

// const instanceApi = axios.create({
//   baseURL: 'http://localhost:5000/api/',
// });

export const productsApi = {
  getProducts(category: string | null): Promise<Array<ProductsItem>> {
    return instance.get(`${category ? `products?category=${category}` : ''}`).then(({ data }) => {
      if (category) {
        return data;
      }
    });
  },
};

export const userApi = {
  registration(email: string, password: string): Promise<any> {
    return axios.post('http://localhost:5000/api/user/registration', {email, password, role: 'ADMIN'}).then(({data}) => {
      localStorage.setItem('token', data.token)
      console.log(data)
      return jwt_decode(data.token)
    })
  },
  login(email: string, password: string): Promise<any> {
    return axios.post('http://localhost:5000/api/user/login', {email, password}).then(({data}) => {
      localStorage.setItem('token', data.token)
      return jwt_decode(data.token)
    })
  },
  check(): Promise<any> {
    return axios.get('http://localhost:5000/api/user/auth').then(({data}) => {
      return data
    })
  },
}
